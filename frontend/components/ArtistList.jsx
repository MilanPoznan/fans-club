import React, { useState, useEffect } from 'react'


export default function ArtistList({ artist }) {

  const [artistsList, setArtistsList] = useState([])

  async function getAllArtist() {
    const artList = await artist.getAllArtists()
    let json = await artList
    setArtistsList(artList)
    return json

  }
  useEffect(() => {
    // const x = getAllArtist()
    // console.log(x)

  }, [])

  function getArtists() {

  }
  useEffect(() => {
    console.log('artistsList', artistsList)
  }, [artistsList])
  return (
    <div>
      <button
        onClick={getAllArtist}
      >Get all artist</button>
    </div>
  )
}