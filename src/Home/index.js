import React, { useEffect, useState, useCallback } from 'react';
import firedb from '../Firebase/firebase'
import MapAllSpots from '../AllSpotsMap'









const Home = ()  =>  {

    const [allSpots, setAllSpots] = useState([])

    const getAllSpots = useCallback(() =>  {
        firedb.collection('spots')
            .get()
            .then(snapshot => {
                setAllSpots(snapshot.docs.map(spot => Object.assign(spot.data(),{spotId: spot.id})))
            })
    },[])
    useEffect(() => 
        getAllSpots()
    ,[getAllSpots]);
    
    return (
      <div>
        <span>Home</span>
        <MapAllSpots allSpots={allSpots}/>
      </div>
    );
  }


export default Home;
