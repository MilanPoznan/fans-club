import React, { useState, useEffect } from 'react'

const subscription_options = [1, 3, 5, 10, 25, 50, 100, 250, 500]
const allCategories = ['music', 'art', 'podcast', 'games', 'yoga', 'modeling', 'film']

export default function RegisterArtistForm({ currentAccountId, contract }) {


  const [title, setTitle] = useState('')
  const [about, setAbout] = useState('')
  const [oneTimeDonations, setOneTimeDonations] = useState(true)
  const [categories, setCategories] = useState([])
  const [subscriptionOptions, setsubscriptionOptions] = useState([])


  function handleSubscriptionAction(e) {
    const currEl = e.target.innerHTML
    const catLen = subscriptionOptions.length

    if (subscriptionOptions === 0) {
      setsubscriptionOptions(prevState => [...prevState, currEl])
      return
    }

    let removeElArr = subscriptionOptions.filter(cat => cat != currEl)

    if (catLen === removeElArr.length) {
      setsubscriptionOptions(prevState => [...prevState, currEl])
    } else {
      setsubscriptionOptions(prevState => prevState.filter(cat => cat !== currEl))
    }

  }


  function handleCategories(e) {

    const currEl = e.target.innerHTML
    const catLen = categories.length

    if (catLen === 0) {
      setCategories(prevState => [...prevState, currEl])
      return
    }

    let removeElArr = categories.filter(cat => cat != currEl)

    if (catLen === removeElArr.length) {
      setCategories(prevState => [...prevState, currEl])
    } else {
      setCategories(prevState => prevState.filter(cat => cat !== currEl))
    }

  }


  async function submitToContract() {

    console.log(currentAccountId)
    await contract.setArtist(title, about, categories, null, subscriptionOptions, oneTimeDonations, null)
    const currentArtist = await contract.getArtist(currentAccountId)

    console.log('currentArtist', currentArtist)

  }

  useEffect(() => {
    console.log(categories)
    console.log(currentAccountId)

  }, [categories])

  useEffect(() => {
    console.log(subscriptionOptions)

  }, [subscriptionOptions])

  return (
    <div>
      <label>Title</label>
      <input name="title" placeholder='title' value={title} onChange={(e) => setTitle(e.target.value)} />
      <label>About</label>
      <textarea name="about" placeholder='about' value={about} onChange={(e) => setAbout(e.target.value)} />

      <label>Pick Subscription options</label>
      <div>
        {subscription_options.map(item =>
          <div
            key={item}
            value={item}
            className={subscriptionOptions.includes(item) ? "active" : 'inactive'}
            onClick={handleSubscriptionAction}
          >{item}</div>)}
      </div>

      <label>Pick Categories</label>
      <div style={{ border: '1px solid brown', padding: '5px' }}>
        {allCategories.map(item =>
          <div
            key={item}
            value={item}
            onClick={(e) => handleCategories(e)}
            className={categories.includes(item) ? "active" : 'inactive'}
          >{item}</div>)}
      </div>

      <label>Allow onetime donations?</label>
      <input type="checkbox" name="onetime-donations" checked={oneTimeDonations} onChange={() => setOneTimeDonations(oneTimeDonations => !oneTimeDonations)} />
      <button
        onClick={submitToContract}
      >Submit artis</button>
    </div>
  )
}
