import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const NavContainer = styled.div`
    background-color: DeepSkyBlue;
    border: 1px solid black;
`

export const NavRow = styled.nav`
    max-width: 1400px;
    padding: 10px 0;
    width: 100%;
    margin: 0 auto;
`
export const NavUl = styled.ul`
    list-style-type: none;
    display: flex;
    align-items: left;
`

export const Link = styled(NavLink)`
  display:inline-block;
  text-decoration: none;
  padding: 15px;
  color: black;
  &:hover {
    color: Gold;
  }
  &.active{
    border-bottom: 1px solid GhostWhite;
    text-transform: uppercase;
  }
`