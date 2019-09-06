import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const NavContainer = styled.div`
    background-color: rgba(135,206,250 ,1 );
    border: 1px solid black;
`

export const NavRow = styled.nav`
    max-width: 1400px;
    width: 100%;
    margin: 0 auto;
`
export const NavUl = styled.ul`
    text-transform: uppercase;
    list-style-type: none;
    display: flex;
    align-items: left;
    margin: 0;
`

export const Link = styled(NavLink)`
  display:inline-block;
  text-decoration: none;
  padding: 15px 15px 15px 15px;
  color: black;
  &:hover {
    color: Gold;
  }
  &.active{
    background-color: Gray;
    border-bottom: 3px solid Gold;
    text-transform: uppercase;
    color: GhostWhite;
  }
`