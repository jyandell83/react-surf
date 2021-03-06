import React from 'react';


//------------------------styled components ---------------------------------
import { NavContainer,
    NavRow,
    Link,
    NavUl
    } from './style';


const Nav = () =>  {
    return(
        <NavContainer>
        <NavRow>
            <NavUl>
                <li>
                    <Link to = '/home'>Home</Link>
                </li>
                <li>
                    <Link to = '/surfspot'>Surf Spot</Link>
                </li>
                <li>
                    <Link to = '/signup'>Sign Up</Link>
                </li>
                <li>
                    <Link to = '/signin'>Sign In</Link>
                </li>
            </NavUl>
        </NavRow>
    </NavContainer>
    )


}

export default Nav;

