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
  contractDonations: bigint = BigInt(0)
  accountForProfit: string = 'maddev.testnet'
  all_artists = new UnorderedMap<ArtistModel>('map-art')
  all_users = new LookupMap<UserInterface>('map-usr')

  @view({})
  get_artist({ account_id }: { account_id: string }) {
    return this.all_artists.get(account_id)
  }

  @view({})
  get_all_artist() {
    return this.all_artists.toArray()
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


  @


  @call({ payableFunction: true })
  donate_to_artist({ artist_id }: { artist_id: string }) {

    //User 
    const donor = near.predecessorAccountId();
    near.log('donor', donor)
    // const currentUser = this.all_users.get(donor) as UserInterface

    // near.log('currentUser', currentUser)


    //Attach deposit
    const donationAmount: bigint = near.attachedDeposit() as bigint;

    //Artist
    const artistToDonate = this.all_artists.get('artisttest.testnet') as ArtistModel;


    let toTransfer = donationAmount - STORAGE_COST;

    let myMoney = toTransfer / BigInt(20)

    toTransfer = toTransfer - myMoney

    near.log('myMoney ', myMoney)
    near.log('toTransfer', toTransfer)


    // const promise = NearPromise.new(artistToDonate.account_id);
    // const promise = near.promiseBatchCreate(artistToDonate.account_id)
    // const promise = NearPromise.new(artistToDonate.account_id);
    // promise.transfer(donationAmount)
    // promise.onReturn();
    const promise = near.promiseBatchCreate(artist_id)
    near.promiseBatchActionTransfer(promise, donationAmount)


    const donationTransaction = createDonationTransaction(artist_id, donationAmount, true, '20-11-2022')

    near.log('Curr user Before donations', donor);
    near.log('Artist Before donations:', artistToDonate);

    // if (donor) {
    //   updateUserAfterDonation(currentUser, donationTransaction, donationAmount, donationAmount)
    // } else {
    //   return `Please create account for ${donor} account`
    // }

    // updateArtistAfterDonation(artistToDonate, donationAmount, donationAmount)

    // return currentUser
  }

}