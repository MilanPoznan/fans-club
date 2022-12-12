import React, { useState, useEffect } from 'react'
import { CategoryFilter, CategoryWrapper, SingleArtistPreview, ArtistInfo } from './styles/LendingPage.styles'
import SvgRender from './SvgRender'
import { Link } from "react-router-dom";
import { ContentWrapper, Heading1, Heading2, Heading4, UppercaseLabel } from './styles/GlobalStyles.styled'


export default function ArtistList({ contract }) {

  const [artistsList, setArtistsList] = useState([])

  async function getAllArtist() {
    const artList = await contract.getAllArtists()
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
      <div>
        {artistsList.map(item => <SingleArtistPreview key={item[0]}>
          <SvgRender iconType='black-logo' />
          <ArtistInfo>
            <Link to={`/single-artist/${item[1].account_id}`} ><Heading4>{item[1]?.title}</Heading4></Link>
            <UppercaseLabel>{item[1]?.about}</UppercaseLabel>
          </ArtistInfo>
        </SingleArtistPreview>)}
      </div>
    </div>
  )
}