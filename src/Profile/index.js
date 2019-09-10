import React, { useState, useEffect, useCallback } from 'react';
import firedb from '../Firebase/firebase';
import { ReportUl, Inpt, Btn } from '../globalStyle';
import { GridContainer, RedBtn, Modal, Form } from './style';
import { ClipLoader } from 'react-spinners';
import {useSpring, animated } from 'react-spring'




const Profile = ({userId, updatePassword, removeUser})  =>  {
    const [allReports, setAllReports] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [isModalShowing, showModal] = useState(false);
    const [pw, setPw] = useState('');
    const slideIn = useSpring({marginTop: '0px', from: {marginTop: '-500px'}})
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
        <GridContainer>
            <div>
                <Btn onClick={() => showModal(true)}>Edit Account Info</Btn>
                {
                    isModalShowing ?
                    <Modal>
                        
                            <Form onSubmit={(e) =>  {
                                e.preventDefault();
                                updatePassword(pw);
                                showModal(false);
                            }}>
                                <Inpt placeholder='New PW...' value={pw} onChange={(e) => setPw(e.target.value)}/><br />
                                <Btn type="submit" >Change Password</Btn><br />
                            </Form>
                            <RedBtn onClick={() => removeUser()}>Delete Account</RedBtn><br />
                        
                    </Modal> : null
                }
            </div>
            <div>
                <animated.h1 style={slideIn}>All Your Reports</animated.h1>
                {isLoading ? <ClipLoader color={'steelblue'}/> :
                <ReportList allReports={allReports}/>
                }
            </div>
        </GridContainer>
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