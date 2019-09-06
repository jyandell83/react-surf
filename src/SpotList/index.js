import React from 'react';
import { Link } from 'react-router-dom';


const SpotList = ({allSpots}) =>  {
    console.log(allSpots, 'this is the props in spotlist')
    return(
        <div>
        <h1>Surfspots</h1>
        <ul>
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
        </ul>
        </div>
        
    )
}

export default SpotList;