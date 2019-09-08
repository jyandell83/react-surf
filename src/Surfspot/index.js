import React, { useState, useEffect, useCallback } from 'react';
import firedb from '../Firebase/firebase';

import 'firebase/auth';

import SpotList from '../SpotList';
import { Btn, Inpt } from '../globalStyle';





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
    return (
      <div>
        
        <SpotList allSpots={allSpots}/>
        {isUserAdmin ? <AddSpotForm addSpot={addSpot}/>: null}
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
            addSpot(spot);
        }}>
            <Inpt name="spotname" placeholder="Spotname..." onChange={e => setSpot({...spot,[e.target.name]: e.target.value})}></Inpt> <br />
            <Inpt name="city" placeholder="city"  onChange={e => setSpot({...spot,[e.target.name]: e.target.value})}></Inpt> <br />
            <Inpt name="state" placeholder="state"  onChange={e => setSpot({...spot,[e.target.name]: e.target.value})}></Inpt> <br />
            <Inpt name="lat" placeholder="Lat..."  onChange={e => setSpot({...spot,[e.target.name]: e.target.value})} ></Inpt> <br />
            <Inpt name="long" placeholder="Long..." onChange={e => setSpot({...spot,[e.target.name]: e.target.value})} ></Inpt> <br />
            <Btn type="submit">Add Spot</Btn>
        </form>
    )

}


export default Surfspot;