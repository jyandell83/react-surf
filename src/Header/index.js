import React from 'react';
import { HeroImage, Logo } from './style';
import {useSpring, animated} from 'react-spring'


const Header = () =>  {
    const props = useSpring({opacity: 1, from: {opacity: 0}})
    return(
        <HeroImage>
            <Logo>The High Line</Logo>
            <animated.div style ={props}>Hello</animated.div>
        </HeroImage>
    )
}

export default Header;