import React from 'react'
import { NavMenuWrapper, LinkWrapper } from './styles/NavMenu.styled';
import { Link } from 'react-router-dom';
const menuLinks = [
  {
    id: 1,
    path: '/register-artist',
    label: 'Register Artist'
  },
  {
    id: 2,
    path: '/artist-list',
    label: 'Explore artist'
  },
  {
    id: 3,
    path: '/register-user',
    label: 'Signup as user'
  },
]

export default function NavMenu({ isMenuOpen }) {
  return (
    <NavMenuWrapper isMenuOpen={isMenuOpen}>

      <LinkWrapper>
        {menuLinks.map(item =>
          <Link key={item.id} to={item.path}>{item.label}</Link>)}
      </LinkWrapper>
      {/* {RenderWalletSignBtn()} */}

    </NavMenuWrapper>
  )
}
