import styled from 'styled-components'


export const HeroImage = styled.div`
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)), url("/pelicans-flying.jpg");
    background-color: papayawhip;
    text-align: left;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    padding: 4rem;
`

export const Logo = styled.h1`
    font-family: 'Armata', sans-serif;
    letter-spacing: .7rem;
    font-weight: 400;
    margin: 0;
    font-size: 5rem;
    background-image: radial-gradient(circle at center, gray, aliceblue);
    -webkit-background-clip: text;
    color: transparent;
    text-transform: uppercase;
`


