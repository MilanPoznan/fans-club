import React from 'react'
import styled from 'styled-components'
import {device} from '../styles/mediaQueries'


const Button = styled.button`
  width: ${(props) => props.isFullWidthOnMobile ? '100%' : 'auto' };;
  padding: ${(props) => props.isLarge ? '20px 60px' : '15px 30px'};
  background: linear-gradient(244.39deg, #B04AFD 0%, #6A6FF8 49.48%, #00BFE7 100%);
  font-weight: 500;
  transition: box-shadow .3s;
  font-family: 'Nunito Sans', sans-serif;
  color: white;
  border: none;
  border-radius: ${(props) => props.isLarge ? '25px' : '20px'};
  font-size: 16px;
  cursor: pointer;

  :hover {
    box-shadow: 1px 8px 30px rgba(106, 111, 248, 0.6);
  }

  @media ${device.tablet} {
    width: auto;
  }
`


export default function WalletButton({wallet, size, isFullWidthOnMobile, children}) {
  
  return (
    <Button isFullWidthOnMobile={isFullWidthOnMobile} onClick={() => wallet.signIn()} isLarge={size === 'large'}>
      {children}
    </Button>
  )
}
