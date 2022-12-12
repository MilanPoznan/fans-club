import styled from 'styled-components'
import {device} from '../styles/mediaQueries'

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0px;
  top: 0;
  right: 0;
  width: 100%;
  z-index: 200;

  img {
    margin-left: -6px;
  }

  @media ${device.tablet} {
    padding: 20px 0px;
  }

  @media ${device.tabletL} {
    padding: 20px 0px;
  }

  @media ${device.desktopS} {
    padding: 20px 0px;

    img {
      width: 150px;
    }
  }

  @media ${device.desktop} {
    
  }

  @media ${device.desktopL} {
    
  }
`