import { UserInterface, UserSubscription, ArtistDynamicProps, UserStatus } from "../models";

export function updateUserAfterDonation(currentUser: UserInterface, donationTransaction: UserSubscription, dontaionUsdt: bigint, toTransfer: bigint) {
  currentUser.total_transactions += 1;
  currentUser.total_dontaions += toTransfer;
  (currentUser.subscription_lists as UserSubscription[]).push(donationTransaction);
  currentUser.total_dontaions_usdt += dontaionUsdt
}

export function initUser(account_id: string, status: UserStatus, nickname: string): UserInterface {
  return {
    account_id: account_id,
    total_dontaions: '0',
    total_dontaions_usdt: BigInt(0),
    total_transactions: 0,
    subscription_lists: [],
    user_status: status,
    nickname: nickname

  }
}