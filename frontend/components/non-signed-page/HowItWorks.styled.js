import styled from 'styled-components'
import {device} from '../styles/mediaQueries'

export const HowItWorksWrapper = styled.div`
  position: relative;
  padding: 100px 0;
  z-index: 4;
  @media ${device.tablet} {
    padding: 100px 0 150px 0;
  }
  @media ${device.desktopS} {
    display: flex;
    padding: 150px 0 200px 0;
  }
  @media ${device.desktopL} {
    padding: 200px 0 250px 0;
  }
`

export const TextContent = styled.div`
  p {
    margin-top: 20px;
    color: white;
  }
  @media ${device.desktopS} {
    width: 40%;
    flex-shrink: 0;
    margin-right: 60px;
  }
  @media ${device.desktop} {
    margin-right: 100px;
  }
  @media ${device.desktopL} {
    margin-right: 160px;
  }
`

export const Steps = styled.div`
  margin-top: 50px;
  @media ${device.desktopS} {
    margin-top: 0;
  }
`

export const Step = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
  &:last-of-type {
    margin-bottom: 0;
  }
  svg {
    width: 30px;
    height: 70px;
  }
  @media ${device.tablet} {
    margin-bottom: 50px;
  }
  @media ${device.desktopS} {
    margin-bottom: 60px;
  }
`

export const StepHeading = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 10px;
  h3 {
    font-weight: 500;
  }
  @media ${device.tablet} {
    align-items: center;
  }
`

export const GradientNumber = styled.div`
  margin-right: 15px;
  font-family: 'Kumbh Sans', sans-serif;
  font-weight: 700;
  font-size: 32px;
  background: linear-gradient(244.39deg, #B04AFD 0%, #6A6FF8 49.48%, #00BFE7 100%);;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`