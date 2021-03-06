import React from 'react';


//------------------------styled components ---------------------------------
import { NavContainer,
    NavRow,
    Link,
    NavUl
    } from './style';

import { Btn } from '../globalStyle'


const Nav = ({signOut, user}) =>  {
    return(
        <NavContainer>
        <NavRow>
            <NavUl>
                <li>
                    <Link to = '/home'>Home</Link>
                </li>
                <li>
                    <Link to = '/profile'>Profile</Link>
                </li>
                <li>
                    <Link to = '/surfspot'>Surf Spot</Link>
                </li>
                    
            </NavUl>
            <span>
                {user}
                <Btn onClick={() => signOut()}>Sign Out</Btn>
            </span>
        </NavRow>
    </NavContainer>
    )


}

export default Nav;

