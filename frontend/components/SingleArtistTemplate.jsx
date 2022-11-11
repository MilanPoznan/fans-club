import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { SubscriptionOption, SingleArtistCategories } from './styles/SingleArtistTemplate.styled'

export default function SingleArtistTemplate({ artistContract }) {

  let { id } = useParams();

  const [currentArtist, setCurrentArtist] = useState()
  const [activeDonation, setActiveDonation] = useState()

  async function getArtistData() {
    const artistData = await artistContract.getArtist(id)
    console.log('artistData', artistData)
    setCurrentArtist(artistData)
  }

  useEffect(() => {
    console.log(1, id)
    getArtistData()
  }, [])

  return (
    <div style={{ paddingTop: '50px' }}>
      {currentArtist && <div>
        <h1>{currentArtist.title}</h1>
        <p>{currentArtist.about}</p>
        <SingleArtistCategories>
          {currentArtist.subscription_types.map((item, index) =>
            <SubscriptionOption
              onClick={() => setActiveDonation(index)}
              isActive={activeDonation === index}
            >
              {item}
            </SubscriptionOption>)}
        </SingleArtistCategories>
        <button>Donate</button>
      </div>}
    </div>

  )
}
