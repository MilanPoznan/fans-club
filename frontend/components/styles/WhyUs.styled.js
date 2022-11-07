import styled from 'styled-components'
import { device } from './mediaQueries';
import { theme } from './GlobalTheme'


export const WhyUsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 80%;
  margin: 0 auto;
  @media ${device.tablet} {
    line-height: 76px;
  }
  @media ${device.desktopS} {
    width: 30%;
  }

`

export const SingleCard = styled.div`
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
    border-radius: 8px;
    box-shadow: 2px 4px 23px 1px rgba(71,71,71,0.74);
  `