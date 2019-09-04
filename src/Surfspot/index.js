import React, { useState, useEffect} from 'react';
import firedb from '../Firebase/firebase'



const Surfspot = ({isUserAdmin})  =>  {
    useEffect(() =>  {
        console.log('hi from surfspot')
    }, []);
    const addSpot = (spot) =>  {
        console.log(spot,'in addSpot');
        firedb.ref(`spots/`).push(spot)
        .catch(function(error) {
            console.log(error)
        });
    }
    return (
      <div>
        <span>Surfspot</span>
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


export default Surfspot;