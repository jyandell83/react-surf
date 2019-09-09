import React, { useEffect, useState, useCallback } from 'react';
import firedb from '../Firebase/firebase'
import MapAllSpots from '../AllSpotsMap'
import SpotList from '../SpotList';
import { Container } from './style'









const Home = ()  =>  {

    const [allSpots, setAllSpots] = useState([])

    const getAllSpots = useCallback(() =>  {
        firedb.collection('spots')
            .get()
            .then(snapshot => {
                setAllSpots(snapshot.docs.map(spot => Object.assign(spot.data(),{id: spot.id})))
            })
    },[])
    useEffect(() => 
        getAllSpots()
    ,[getAllSpots]);
    
    return (
      <Container>
        <MapAllSpots allSpots={allSpots}/>
        <SpotList allSpots={allSpots}/>
      </Container>
    );
  }


export default Home;
