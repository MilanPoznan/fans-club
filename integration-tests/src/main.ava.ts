import { Worker, NearAccount, NEAR } from 'near-workspaces';
import anyTest, { TestFn } from 'ava';
import { Artist } from './testModels'
const test = anyTest as TestFn<{
  worker: Worker;
  accounts: Record<string, NearAccount>;
}>;

test.beforeEach(async (t) => {
  // Pokreni sandbox server
  const worker = await Worker.init();

  // Deploy contract
  const root = worker.rootAccount;
  const contract = await root.createSubAccount('test-account');
  // Get wasm file path from package.json test script in folder above
  await contract.deploy(
    process.argv[2],
  );


  //Artists
  const rambo = await root.createSubAccount('rambo')
  const prtibege = await root.createSubAccount('prtibege')

  //Users
  const user1 = await root.createSubAccount('user1', { initialBalance: NEAR.parse('30 N').toJSON() })// Ispostovao dokumentaciju sa ovim parsiranjem
  const user2 = await root.createSubAccount('user2')

  // Save state for test runs, it is unique for each test
  t.context.worker = worker;
  /**
   * Acc poseduje kontract 
   * acc posedije ramba kao subaccount
   */
  t.context.accounts = { root, contract, rambo, prtibege, user1, user2 };// contract 

});

test.afterEach.always(async (t) => {
  // Stop Sandbox server
  await t.context.worker.tearDown().catch((error) => {
    console.log('Failed to stop the Sandbox:', error);
  });
});

// test('Set new artist', async (t) => {

//   const { contract, rambo } = t.context.accounts;

//   const newArtist = {
//     title: 'Rambo Amadeus',
//     about: 'Rambo je car',
//     categories: ['music', 'art'],
//     socials: null,
//     subscription_types: [1, 5, 10],
//     onetime_donations: true,
//     image_url: null,

//   }

//   await rambo.call(contract, 'create_artist', { ...newArtist })

//   const result = await contract.view('get_artist', { account_id: rambo.accountId })

//   console.log('final', result)

//   t.deepEqual(result, {
//     account_id: rambo.accountId,
//     title: 'Rambo Amadeus',
//     about: 'Rambo je car',
//     categories: ['music', 'art'],
//     socials: null,
//     subscription_types: [1, 5, 10],
//     onetime_donations: true,
//     image_url: null,
//     total_donations_near: '0',
//     total_donations_usd: 0,
//     total_donations_count: 0
//   })
// });


// test('Get all artists after register two', async (t) => {

//   const { contract, rambo, prtibege } = t.context.accounts;

//   const firstArtist = {
//     title: 'Rambo Amadeus',
//     about: 'Rambo je car',
//     categories: ['music', 'art'],
//     socials: null,
//     subscription_types: [1, 5, 10],
//     onetime_donations: true,
//     image_url: null,
//   }

//   const secondArtist = {
//     title: 'Prti Bee GEe',
//     about: 'Cigani na Adi',
//     categories: ['music', 'art'],
//     socials: null,
//     subscription_types: [5, 10, 25, 100],
//     onetime_donations: true,
//     image_url: null,
//   }

//   await rambo.call(contract, 'create_artist', { ...firstArtist })

//   await prtibege.call(contract, 'create_artist', { ...secondArtist })

//   const allArtists = await contract.view('get_all_artist')

//   console.log('all artists', allArtists)

// })


// test('Set new user with ID', async (t) => {

//   const { contract, user1, user2 } = t.context.accounts

//   await user1.call(contract, 'create_user_profile', { userStatus: 'bronze' })
//   await user2.call(contract, 'create_user_profile', { userStatus: 'bronze' })

//   const getAllUsers: [] = await contract.view('get_all_users')
//   const singleUser: [] = await contract.view('get_user', { account_id: user1.accountId })

//   console.log('All users', getAllUsers)
//   console.log('Single user', singleUser)
//   t.is(2, 2)

// })

test('donations', async (t) => {

  const { contract, user1, user2, rambo } = t.context.accounts

  await user1.call(contract, 'create_user_profile', { userStatus: 'bronze' })

  const secondArtist = {
    title: 'Prti Bee GEe',
    about: 'Cigani na Adi',
    categories: ['music', 'art'],
    socials: null,
    subscription_types: [5, 10, 25, 100],
    onetime_donations: true,
    image_url: null,
  }

  await rambo.call(contract, 'create_artist', { ...secondArtist })

  const allArtists = await contract.view('get_all_artist')

  console.log(allArtists)

  const dontaion = await user1.call(
    contract, 'donate_to_artist',
    { artist_id: rambo.accountId },
    { attachedDeposit: NEAR.parse("3 N").toString() })


  console.log(dontaion)

})


// test('Reject double user registration', async (t) => {
//   const { contract, user1 } = t.context.accounts

//   await user1.call(contract, 'create_user_profile', { userStatus: 'bronze' })
//   const result = await user1.call(contract, 'create_user_profile', { userStatus: 'bronze' })

//   t.is(result, 'User already exist')
// })

// test('Test category retyrb', async (t) => {
//   const { contract, user1, user2, rambo } = t.context.accounts

//   const firstArtist = {
//     title: 'Rambo Amadeus',
//     about: 'Rambo je car',
//     categories: ['music', 'art'],
//     socials: null,
//     subscription_types: [1, 5, 10],
//     onetime_donations: true,
//     image_url: null,
//   }


//   const secondArtist = {
//     title: 'Sec Amadeus',
//     about: 'Sec je car',
//     categories: ['music', 'art', 'movie'],
//     socials: null,
//     subscription_types: [1, 5, 10],
//     onetime_donations: true,
//     image_url: null,
//   }

//   const ramboArtist: any = await rambo.call(contract, 'create_artist', { ...firstArtist })
//   const ramboArtist2: any = await rambo.call(contract, 'create_artist', { ...firstArtist })
//   const newArt: any = await user2.call(contract, 'create_artist', { ...secondArtist })


//   console.log('ramboArtist', ramboArtist)
//   console.log('ramboArtist2', ramboArtist2)
//   console.log('newArt', newArt)

//   // const getArtFromCat = await rambo.call(contract, 'get_artist_from_category', { category: 'movie' })
//   // const getArtFromCat2 = await rambo.call(contract, 'get_artist_from_category', { category: 'podcasts' })

//   // console.log('artist: ', getArtFromCat)
//   // console.log('artist: ', getArtFromCat2)


// })



// test('Donate to artis', async (t) => {
//   const { contract, user1, user2, rambo } = t.context.accounts


//   const firstArtist = {
//     title: 'Rambo Amadeus',
//     about: 'Rambo je car',
//     categories: ['music', 'art'],
//     socials: null,
//     subscription_types: [1, 5, 10],
//     onetime_donations: true,
//     image_url: null,
//   }

//   //Create artist
//   const ramboArtist: any = await rambo.call(contract, 'create_artist', { ...firstArtist })
//   console.log('ramboArtist', ramboArtist)
//   //Create 
//   await user1.call(contract, 'create_user_profile', { userStatus: 'bronze' })
//   await user2.call(contract, 'create_user_profile', { userStatus: 'bronze' })

//   await user1.call(contract, 'donate_to_artist', { artist_id: rambo.accountId, dontaionUsdt: 10 }, { attachedDeposit: '100000000000000000000000' })
//   await user2.call(contract, 'donate_to_artist', { artist_id: rambo.accountId, dontaionUsdt: 15 }, { attachedDeposit: '150000000000000000000000' })


//   const userAfterDonation = await user1.call(contract, 'get_user', { account_id: user1 },)
//   console.log(`%c test userAfterDonation ${userAfterDonation}`, "color:red")

//   t.is(1, 1)

// })


