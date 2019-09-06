import React, { useState, useEffect, useCallback } from 'react';
import firedb from '../Firebase/firebase';

import 'firebase/auth';

import SpotList from '../SpotList';





const Surfspot = ({isUserAdmin})  =>  {
    const [allSpots, setAllSpots] = useState([]);
    
    const getAllSpots = useCallback(() =>  {
        firedb.collection('spots').get()
            .then(snapshot =>  {
                setAllSpots(snapshot.docs.map(spot => Object.assign(spot.data(), {id: spot.id})))
            })
    }, [])

    useEffect(() =>  {
        getAllSpots();
    },[getAllSpots]);

    const addSpot = (spot) =>  {
        firedb.collection('spots').doc().set(spot)
        .then(getAllSpots())
        .catch(function(error) {
            console.log(error)
        })
        
    }
    console.log(allSpots, 'this should be all spots');
    return (
      <div>
        <span>Surfspots</span>
        {isUserAdmin ? <AddSpotForm addSpot={addSpot}/>: null}
        <SpotList allSpots={allSpots}/>
      </div>
    );
}

const AddSpotForm = ({addSpot}) =>  {
    const [spot, setSpot] = useState({
        spotname: '',
        city:'',
        state:'',
        lat:'',
        long: ''
    });
    

    return(
        <form onSubmit={e =>  {
            e.preventDefault();
            console.log(spot, 'in onSubmit');
            addSpot(spot);
        }}>
            <input name="spotname" placeholder="Spotname..." onChange={e => setSpot({...spot,[e.target.name]: e.target.value})}></input> <br />
            <input name="city" placeholder="city"  onChange={e => setSpot({...spot,[e.target.name]: e.target.value})}></input> <br />
            <input name="state" placeholder="state"  onChange={e => setSpot({...spot,[e.target.name]: e.target.value})}></input> <br />
            <input name="lat" placeholder="Lat..."  onChange={e => setSpot({...spot,[e.target.name]: e.target.value})} ></input> <br />
            <input name="long" placeholder="Long..." onChange={e => setSpot({...spot,[e.target.name]: e.target.value})} ></input> <br />
            <button type="submit">Add Spot</button>
        </form>
    )

}


export default Surfspot;