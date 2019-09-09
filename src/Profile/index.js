import React, { useState, useEffect, useCallback } from 'react';
import firedb from '../Firebase/firebase'
import { ReportUl } from '../globalStyle'



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
        <h1>All Your Reports</h1>
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
                        </ReportUl>
                    
                )
            }
        </div>
    )
}





export default Profile;