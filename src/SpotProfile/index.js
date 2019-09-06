import React, { useState, useEffect, useCallback} from 'react';
import firedb from '../Firebase/firebase'
import 'firebase/auth'
// import app from 'firebase/app';

const SpotProfile = (props) =>  {
    const [spot, setSpot] = useState('');
    const [allReports, setAllReports] = useState([]);
    const getSpotInfo = useCallback(() =>  {
        firedb.ref('spots')
            .on('value', (snapshot) => {
                const spotArray = [];
                snapshot.forEach(childSnapshot => {
                spotArray.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                })
                const filtered = spotArray.filter(spot => spot.id === props.match.params.id)
                setSpot(filtered[0])
            })
        })
        getReports();
    },[props.match.params.id])

    const getReports = () =>  {
        firedb.ref('reports')
            .on('value', async (snapshot) => {
                setAllReports(snapshot.val())
    })}

    const addReport = (report) =>  {
        firedb.ref(`reports/`).push(report)
        .catch(function(error) {
            console.log(error)
        })
    }
    
    useEffect(() =>  
        getSpotInfo()
    ,[getSpotInfo]);

    return(
        <div>
            <h1>{spot.spotname}</h1>
            <h2>{spot.city}</h2>
            <AddReport addReport={addReport} spotId={spot.id} userId={props.userId}/>
            <ReportList allReports={allReports}/>
        </div>
    )
}

const ReportList = ({ allReports }) =>  {
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
            addReport(Object.assign(report, {spot: spotId}, {user: userId}));
        }}>
            <input 
                placeholder="Date..." 
                type="date" 
                value={report.date}
                name="date"
                onChange={e => setReport({...report,[e.target.name]: e.target.value})}/><br />
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