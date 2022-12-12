import styled from 'styled-components'
import {device} from '../styles/mediaQueries'

export const HeroWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  flex-direction: column-reverse;
  h1 {
    margin-bottom: 40px;
    margin-top: 20px;
  }
  p {
    font-size: 16px;
    max-width: 500px;
  }
  img {
    width: 100%;
  }

  @media ${device.tablet} {
    
    img {
      width: 400px;
      margin-right: auto;
    }
  }

  @media ${device.tabletL} {
    
  }

  @media ${device.desktopS} {
    flex-direction: row;
    padding: 50px 0 0 0;
    img {
      width: 50%;
      margin-left: 30px;
    }

  }

  @media ${device.desktop} {
    padding-top: 50px;
  }

  @media ${device.desktopL} {
    img {
      margin-left: 18px;
    }
  }
`

export const ButtonWrapper = styled.div`
  margin-top : 50px;
`