import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const NavContainer = styled.div`
    background-color: var(--color-primary);
    box-shadow: var(--shadow-light);
`

export const NavRow = styled.nav`
    max-width: 140rem;
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
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
  padding: 1.5rem 1.5rem 1.5rem 1.5rem;
  color: var(--color-grey-dark-1);
  &:hover {
    color: var(--color-accent);
  }
  &.active{
    background-color: var(--color-tertiary);
    border-bottom: 3px solid var(--color-accent);
    text-transform: uppercase;
    color: var(--color-secondary);
  }
`