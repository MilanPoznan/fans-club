import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { SubscriptionOption, SingleArtistCategories } from './styles/SingleArtistTemplate.styled'

import { utils } from 'near-api-js'

export default function SingleArtistTemplate({ artistContract }) {

  let { id } = useParams();

  const [currentArtist, setCurrentArtist] = useState()
  const [activeDonation, setActiveDonation] = useState()

  async function getArtistData() {
    const artistData = await artistContract.getArtist(id)
    console.log('artistData', artistData)
    setCurrentArtist(artistData)

  }

  async function handleDonateToArtist() {
    if (activeDonation) {
      const yocto = utils.format.parseNearAmount(activeDonation.toString())
      const userAdterDonation = await artistContract.donateToArtist(currentArtist.account_id, yocto)
      console.log('userAdterDonation', userAdterDonation)

    } else {
      console.log('Please select proper amount')
    }

  }

  useEffect(() => {
    console.log(1, id)
    getArtistData()
  }, [])


  useEffect(() => {
    console.log(activeDonation)
    const yocto = activeDonation && utils.format.parseNearAmount(activeDonation.toString())
    console.log('yocto', yocto)
  }, [activeDonation])
  return (
    <div style={{ paddingTop: '50px' }}>
      {currentArtist && <div>
        <h1>{currentArtist.title}</h1>
        <p>{currentArtist.about}</p>
        <SingleArtistCategories>
          {currentArtist.subscription_types.map((item, index) =>
            <SubscriptionOption
              key={item}
              onClick={() => setActiveDonation(item)}
              isActive={activeDonation === index}
            >
              {item}
            </SubscriptionOption>)}
        </SingleArtistCategories>
        <button onClick={handleDonateToArtist}>Donate</button>
      </div>}
    </div>

  )
}
