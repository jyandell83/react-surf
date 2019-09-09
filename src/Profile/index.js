import React, { useState, useEffect, useCallback } from 'react';
import firedb from '../Firebase/firebase'



const Profile = ({userId})  =>  {
    const [allReports, setAllReports] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const getReports = useCallback(() =>  {
        firedb.collection('reports').where('userId', '==', userId)
            .get()
            .then(snapshot => {
                setAllReports(snapshot.docs.map(report => Object.assign(report.data(),{reportId: report.id})))
                setIsLoading(false);
            })
    },[userId])
    useEffect(() =>  {
        getReports();
    }, [getReports]);
    return (
      <div>
        <span>Profile</span>
        {isLoading ? <div>loading</div> :
        <ReportList allReports={allReports}/>
        }
      </div>
    )
  }


const ReportList = ({allReports}) =>  {
    console.log(allReports, 'all reports on profile page')
    return(
        <div>
            {
                allReports.map((e,i) => 
                        <ul key={i}>
                            <li>
                                {e.date}
                            </li>
                            <li>
                                {e.time}
                            </li>
                            <li>
                                {e.content}
                            </li>
                        </ul>
                    
                )
            }
        </div>
    )
}





export default Profile;