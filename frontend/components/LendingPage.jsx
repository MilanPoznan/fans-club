import React, { useEffect, useState } from 'react'
import { CategoryFilter, CategoryWrapper, SingleArtistPreview, ArtistInfo } from './styles/LendingPage.styles'
import { ContentWrapper, Heading1, Heading2, Heading4, UppercaseLabel } from './styles/GlobalStyles.styled'
import SvgRender from './SvgRender'
import { Link } from "react-router-dom";

export default function LendingPage({ artist }) {
  const categories = ['art', 'music', 'podcast', 'gaming', 'modeling']

  const [artistsFromCategory, setArtistsFromCategory] = useState([])

  async function filterArtist(category) {
    const artistFromCat = await artist.getArtistFromCategory(category)
    setArtistsFromCategory(artistFromCat)
    console.log(artistsFromCategory)
  }

  useEffect(() => {
    console.log(artistsFromCategory)
  }, [artistsFromCategory])

  return (
    <ContentWrapper>
      <Heading1>Find Creators</Heading1>

      <CategoryWrapper>
        {categories.map(item => <CategoryFilter onClick={() => filterArtist(item)}>{item}</CategoryFilter>)}
      </CategoryWrapper>
      {artistsFromCategory.length !== 0 ? artistsFromCategory.map(item =>
        <SingleArtistPreview>
          <SvgRender iconType='black-logo' />
          <ArtistInfo>
            <Link to={`/single-artist/${item.account_id}`} ><Heading4>{item?.title}</Heading4></Link>
            <UppercaseLabel>{item?.about}</UppercaseLabel>
          </ArtistInfo>
        </SingleArtistPreview>)
        : <Heading2>Currently no artist in this category</Heading2>}
      {/* On category click show artist from that category  */}
    </ContentWrapper>
  )
}
