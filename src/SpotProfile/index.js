import React, { useState, useEffect, useCallback} from 'react';
import MapContainer from '../SurfMap';
import WeatherWidget from '../WeatherWidget';
import firedb from '../Firebase/firebase'
import 'firebase/auth'
import { Btn, Inpt } from '../globalStyle'
import { SpotContainer, ReportUl } from './style'
import { ClipLoader } from 'react-spinners';

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
                setAllReports(snapshot.docs.map(report => Object.assign(report.data(),{reportId: report.id})))
                setLoading(false)
            })
    }
    
    

    

    const addReport = (report) =>  {
        firedb.collection('reports').doc()
            .set(report)
            .then(getReports())
        .catch(function(error) {
            console.log(error)
        })
        
    }

    const removeReport = (reportId) =>  {
        firedb.collection("reports").doc(reportId).delete().then(function() {
            console.log("Document successfully deleted!");
        })
        .then(getReports())
        .catch(function(error) {
            console.error("Error removing document: ", error);
        });
    }
    
    useEffect(() => 
        getSpotInfo()
    ,[getSpotInfo]);
    
    return(
        <SpotContainer>
            <div>
                <h1>{spot.spotname}</h1>
                <h2>{spot.city}</h2>
                
                <AddReport addReport={addReport} spotId={props.match.params.id} userId={props.userId}/>
            </div>
            <ReportList allReports={allReports} removeReport={removeReport}/>
            {
                loading
                    ? <ClipLoader color={'steelblue'}/>
                    :  
                    <div>
                        <WeatherWidget lat={spot.lat} long={spot.long}/>
                        <div className="mapBox">
                            <MapContainer lat={spot.lat} long={spot.long}/>
                        </div>
                        
                        
                    </div>
            }

        </SpotContainer>
    )
}

const ReportList = ({ allReports, removeReport }) =>  {
    return(
        <div>
            {
                allReports.map((e,i) => 
                        <ReportUl key={i}>
                            <li>
                                {e.date}
                            </li>
                            <li>
                                {e.time}
                            </li>
                            <li>
                                {e.content}
                            </li>
                            <Btn onClick={() => removeReport(e.reportId)}>
                                X
                            </Btn>
                        </ReportUl>
                    
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
            <Inpt 
                placeholder="Date..." 
                type="date" 
                value={report.date}
                name="date"
                onChange={e => setReport({...report,[e.target.name]: e.target.value})}/><br />
            <Inpt 
                placeholder="Time..."
                type="time" value={report.time} 
                name="time"
                onChange={e => setReport({...report,[e.target.name]: e.target.value})}/><br />
            <textarea 
                placeholder=""type="text"  
                value={report.content}
                name="content"
                onChange={e => setReport({...report,[e.target.name]: e.target.value})}></textarea><br />
            <Btn type="submit">Add Report</Btn><br />
        </form>
    )
}

export default SpotProfile;