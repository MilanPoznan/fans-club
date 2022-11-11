import styled from 'styled-components'

export const SingleArtistCategories = styled.div`
display: flex;

`
export const SubscriptionOption = styled.div`
  border: ${({ isActive }) => isActive ? '1px solid red' : '1px solid black'};
  padding: 10px;
  border-radius: 8px;
  
`