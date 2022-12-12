import styled from 'styled-components'
import { device } from '../styles/mediaQueries';

export const WhyUsSectionWrapper = styled.div`
  padding-top: 100px;
  text-align: left;
  h2 {
    color: white;
    margin-bottom: 20px;
  }
  p {
    color: white;
    opacity: .6;
  }

  @media ${device.tablet} {
    padding-top: 150px;
  }

  @media ${device.tabletL} {
    p {
      max-width: 600px;
    }
  }

  @media ${device.desktopS} {
    padding-top: 200px;
    text-align: center;
    p {
      max-width: 850px;
      margin: 0 auto;
    }
  }
`


export const WhyUsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 30px auto 0 auto;
  @media ${device.tablet} {
    
  }
  @media ${device.desktopS} {
    justify-content: space-between;
    margin: 50px auto 0 auto;
  }

`

export const SingleCard = styled.div`
  display: flex;
  flex-flow: column;
  width: 100%;
  padding: 25px 0px 30px 0px;
  border-radius: 8px;
  h3 {
    color: white;
    margin-bottom: 20px;
  }

  @media ${device.tabletL} {
    width: 44%;
    padding: 30px 0px 50px 0px;
  }
  
  @media ${device.desktopS} {
    width: 30%;
  }
`

export const GradientIconWrapper = styled.div`
  width: fit-content;
  height: fit-content;
  padding: 2px;
  background: linear-gradient(244.39deg, #B04AFD 0%, #6A6FF8 49.48%, #00BFE7 100%);
  border-radius: 50%;
`

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  background-color: #08071B;
  border-radius: 50%;
  svg {
    width: 25px;
    height: 25px;
  }
  @media ${device.tablet} {
    width: 70px;
    height: 70px;
    svg {
      width: 45px;
      height: 45px;
    } 
  }
`

export const TextWrapper = styled.div`
  text-align: left;
  margin-top: 20px;
`