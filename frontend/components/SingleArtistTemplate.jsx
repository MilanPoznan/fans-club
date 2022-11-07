import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

export default function SingleArtistTemplate({ artistContract }) {

  let { id } = useParams();


  const [currentArtist, setCurrentArtist] = useState()

  async function getArtistData() {
    const artistData = await artistContract.getArtist(id)
    setCurrentArtist(artistData)
    console.log(currentArtist)
  }

  useEffect(() => {
    id.replace(':', '')
    console.log(id)
    // getArtistData()
  }, [])

  return (
    <div>SingleArtistTemplate</div>
  )
}
