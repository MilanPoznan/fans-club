/* Talking with a contract often involves transforming data, we recommend you to encapsulate that logic into a class */

export class Artist {

  constructor({ contractId, walletToUse }) {
    this.contractId = contractId;
    this.wallet = walletToUse;
  }


  async getArtistFromCategory(category) {
    return await this.wallet.viewMethod({ contractId: this.contractId, method: 'get_artist_from_category', args: { category: category } })
  }

  async createUserProfile(status, nickname) {
    return await this.wallet.callMethod({ contractId: this.contractId, method: 'create_user_profile', args: { status: status, nickname: nickname } })
  }

  async getUser(userId) {
    return await this.wallet.viewMethod({ contractId: this.contractId, method: 'get_user', args: { account_id: userId } })
  }

  async getAllUsers() {
    return await this.wallet.viewMethod({ contractId: this.contractId, method: 'get_all_users' })
  }


  async getArtist(currentArtist) {
    return await this.wallet.viewMethod({ contractId: this.contractId, method: 'get_artist', args: { account_id: currentArtist } });
  }

  async getAllArtists() {
    return await this.wallet.viewMethod({ contractId: this.contractId, method: 'get_all_artist' });
  }

  async donateToArtist(artistId, donationInUsd) {
    return await this.wallet.callMethod({ contractId: this.contractId, method: 'donate_to_artist', args: { artist_id: artistId, dontaionUsdt: donationInUsd } })
  }

  async setArtist(title, about, categories, socials, subscription_types, onetime_donations, image_url) {

    console.log(this.contractId)

    return await this.wallet.callMethod({
      contractId: this.contractId,
      method: 'create_artist',
      args: { title, about, categories, socials, subscription_types, onetime_donations, image_url }
    });
  }
}