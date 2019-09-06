import React, { useState, useEffect, useCallback} from 'react';
import MapContainer from '../SurfMap';
import firedb from '../Firebase/firebase'
import 'firebase/auth'
// import app from 'firebase/app';

const SpotProfile = (props) =>  {
    const [spot, setSpot] = useState('');
    const [allReports, setAllReports] = useState([]);
    const [ loading, setLoading ] = useState(true)
    const getSpotInfo = useCallback(() =>  {
        firedb.collection('spots').doc(props.match.params.id)
            .get()
            .then(snapshot => {
                setSpot(snapshot.data())
                getReports()
            })
    },[props.match.params.id, setSpot])

    const getReports = () =>  {
        firedb.collection('reports').where('spotId', '==', props.match.params.id)
            .get()
            .then(snapshot => {
                setAllReports(snapshot.docs.map(report => report.data()))
                setLoading(false)
            })
    }
    

    

    const addReport = (report) =>  {
        firedb.collection('reports').doc()
            .set(report)
        .catch(function(error) {
            console.log(error)
        })
    }
    
    useEffect(() => 
        getSpotInfo()
    ,[getSpotInfo]);

    return(
        <div>
            {
                loading
                    ? <div>loading</div>
                    :  
                    <div>
                        <h1>{spot.spotname}</h1>
                        <h2>{spot.city}</h2>
                        <MapContainer lat={spot.lat} long={spot.long}/>
                        <AddReport addReport={addReport} spotId={props.match.params.id} userId={props.userId}/>
                        <ReportList allReports={allReports}/>
                    </div>
            }

        </div>
    )
}

const ReportList = ({ allReports }) =>  {
    console.log(allReports, 'all reports')
    return(
        <div>
            {
                Object.entries(allReports).map(e =>  
                    <div>{e[1].content}</div>
                )
            }
        </div>
    )
}

const AddReport = ({addReport, spotId, userId}) =>  {
    const [report, setReport] = useState({
        date: '',
        time: '',
        content: ''
    });


    // useEffect(() => {
    //     setReport({...report,spot: spotId})
    // }, [spotId, report])

    return(
        <form onSubmit={e =>  {
            e.preventDefault();
            addReport(Object.assign(report, {spotId, userId}));
        }}>
            <input 
                placeholder="Date..." 
                type="date" 
                value={report.date}
                name="date"
                onChange={e => setReport({...report,[e.target.name]: e.target.value})}/>
            <input 
                placeholder="Time..."
                type="time" value={report.time} 
                name="time"
                onChange={e => setReport({...report,[e.target.name]: e.target.value})}/><br />
            <textarea 
                placeholder=""type="text"  
                value={report.content}
                name="content"
                onChange={e => setReport({...report,[e.target.name]: e.target.value})}></textarea><br />
            <button type="submit">Add Report</button><br />
        </form>
    )
}

export default SpotProfile;