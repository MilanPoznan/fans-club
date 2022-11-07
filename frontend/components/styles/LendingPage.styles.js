import styled from 'styled-components'


export const CategoryWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 40px;
`
export const CategoryFilter = styled.div`
  margin: 10px;
  border: 1px solid grey;
  padding: 4px 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: fit-content;
  border-radius: 8px;
`

export const SingleArtistPreview = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  border-radius: 8px;
  box-shadow: -1px 6px 26px -4px rgba(0,0,0,0.75);
  padding: 8px;
  margin-bottom: 24px;
  img, svg {
    width: 46px;
    margin-right: 30px;
  }

`
export const ArtistInfo = styled.div``