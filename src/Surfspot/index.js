import React, { useState, useEffect} from 'react';
import firedb from '../Firebase/firebase'



const Surfspot = ({isUserAdmin})  =>  {
    const [allSpots, setAllSpots] = useState([]);
    const getAllSpots = () =>  {
        
        firedb.ref('spots')
            .on('value', (snapshot) => {
                const spotArray = [];
                snapshot.forEach(childSnapshot => {
                spotArray.push(childSnapshot.val())
                
            })
            setAllSpots(spotArray)
        })
        
    }
    useEffect(() =>  {
        getAllSpots();
    },[]);
    const addSpot = (spot) =>  {
        firedb.ref(`spots/`).push(spot)
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
            <button type="submit">Sign Up</button>
        </form>
    )

}

const SpotList = ({allSpots}) =>  {
    console.log(allSpots, 'this is the props in spotlist')
    return(
        <div>
        <h1>hi im a list of surfspots</h1>
        {
            allSpots.map(spot =>  {
                return(
                <li>
                    {spot.spotname}
                </li>
                )
            })
        }
        </div>
        
    )
}


export default Surfspot;