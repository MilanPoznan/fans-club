import { NearBindgen, near, call, view, LookupMap, UnorderedMap, NearPromise } from 'near-sdk-js';
import {
  ArtistDynamicProps,
  UserInterface,
  UserStatus,
  STORAGE_COST,
  SingleAritstType,
  ArtistModel
} from './models';
import { createDonationTransaction } from './utils/utils';
import { initUser, updateUserAfterDonation } from './utils/userUtils'
import { updateArtistAfterDonation } from './utils/artistUtils'

import BigNumber from 'bignumber.js'

//Moram logiku za storage cost da odradim kada se registruju User & Artst
@NearBindgen({})
class Artist { //
  // allArtists: SingleAritstType = {} //lookup map
  // users: UserInterface[] = [] //vec
  contractDonations: bigint
  accountForProfit: 'maddev.testnet'
  all_artists = new UnorderedMap('map-art')
  all_users = new LookupMap('map-usr')

  @view({})
  get_artist({ account_id }: { account_id: string }) {
    return this.all_artists.get(account_id)
  }

  @view({})
  get_all_artist() {
    return this.all_artists
  }

  @view({})
  get_artist_from_category({ category }: { category: string }) {

    const artistFromCategory = []

    this.all_artists.toArray().forEach((item: [string, ArtistModel]) => {
      if (item[1].categories.includes(category)) {
        artistFromCategory.push(item)
      }
    })

    return artistFromCategory
  }

  @view({})
  get_all_users() {
    return this.all_users

  }

  @view({})
  get_user({ account_id }) {
    return this.all_users.get(account_id)
  }

  @call({})
  create_user_profile({ status, nickname }: { status: UserStatus, nickname: string }): UserInterface | "User already exist" {

    let userAccountId = near.predecessorAccountId()

    // const checkDoesUserExist = this.users.filter(item => item.account_id === userAccountId)
    const checkDoesUserExist = this.all_users.get(userAccountId)

    if (!checkDoesUserExist) {
      let newUser = initUser(userAccountId, status, nickname)
      this.all_users.set(userAccountId, newUser)
      // this.users.push(newUser)
      return newUser
    } else {
      near.log('User already exist')
      return "User already exist"
    }
  }

  @call({})
  create_artist({ title, about, categories, socials, subscription_types, onetime_donations, image_url }: ArtistDynamicProps): void {

    let account_id = near.predecessorAccountId()

    const isArtistExist = this.all_artists.get(account_id)
    near.log('does aritst exist: ', isArtistExist)

    if (!isArtistExist) {

      const newArtist = new ArtistModel({
        account_id,
        title: title,
        about: about,
        categories: categories,
        socials: socials,
        subscription_types: subscription_types,
        onetime_donations: onetime_donations,
        image_url: image_url
      })


      this.all_artists.set(account_id, newArtist)

    } else {
      near.log('This account already exist ')
    }

  }

  @call({ payableFunction: true })
  donate_to_artist({ artist_id, dontaionUsdt }: { artist_id: string, dontaionUsdt: number }) {

    //User 
    const donor = near.predecessorAccountId();
    // const filterCurrentUser = this.users.filter(user => user.account_id === donor)
    const currentUser = this.all_users.get(donor) as UserInterface

    near.log('currentUser', currentUser)
    // const currentUser = filterCurrentUser[0]
    //Attach deposit
    const donationAmount: bigint = near.attachedDeposit() as bigint;

    //Artist
    const artistToDonate = this.all_artists.get(artist_id) as ArtistModel;

    let toTransfer = donationAmount;
    near.log(1, toTransfer)

    toTransfer -= STORAGE_COST

    //My 5% 
    let myMoney = toTransfer / BigInt(20)
    //Artist money = 95%
    let transferToArtist = toTransfer - myMoney

    near.log('myMoney- ', myMoney)
    near.log('transferToArtist- ', transferToArtist)

    near.log(transferToArtist)

    //Send to artist
    // const artistPromise = near.promiseBatchCreate(artist_id)
    // const myPromise = near.promiseBatchCreate('maddev.testnet')

    // const tx = near.promiseBatchActionTransfer(artistPromise, toTransfer)
    // const myTx = near.promiseBatchActionTransfer(myMoney, myPromise)

    // const artistStatus = near.promiseReturn(artistPromise);
    // const myPromise = near.promiseBatchCreate(this.accountForProfit)
    // const myTransaction = near.promiseBatchActionTransfer(myPromise, myMoney)

    // near.log('transaction ==== ', tx)
    // near.log('myTx', myTx)
    //Demo for now 

    const promise = NearPromise.new(artistToDonate.account_id);
    promise.transfer(toTransfer);
    promise.onReturn();

    const donationTransaction = createDonationTransaction(artist_id, donationAmount, true, '20-11-2022')

    near.log('Curr user Before donations', currentUser);
    near.log('Artist Before donations:', artistToDonate);

    if (currentUser) {
      updateUserAfterDonation(currentUser, donationTransaction, dontaionUsdt, toTransfer)
    } else {
      return `Please create account for ${donor} account`
    }

    updateArtistAfterDonation(artistToDonate, toTransfer, dontaionUsdt)

  }

}