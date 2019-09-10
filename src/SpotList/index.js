import React from 'react';
import { Link } from 'react-router-dom';
import { Ul } from './style';


const SpotList = ({allSpots}) =>  {
    return(
        <div>
        <h1>Surfspots</h1>
        <Ul>
        {
            allSpots.map(spot =>  {
                
                return(
                <li key={spot.id}>
                    <Link to={`/surfspot/${spot.id}`}>
                        {spot.spotname}
                    </Link>
                </li>
                )
            })
        }
        </Ul>
        </div>
        
    )
}

export default SpotList;