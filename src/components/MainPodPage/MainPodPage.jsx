import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MainPodPage.css'
import { useHistory } from 'react-router-dom';
import PodMember from '../PodMember/PodMember';

function MainPodPage() {
    const history = useHistory();
    const dispatch = useDispatch();
    const user = useSelector(store => store.user);
    const podList = useSelector(store => store.mainPodReducer);
    const podInfo = useSelector(store => store.podInfoReducer);

    useEffect(() => {
        dispatch({
            type: 'GET_USER_POD',
            payload: user.pod_id
        })
        dispatch({
            type: 'GET_POD_INFO',
            payload: user.pod_id
        })
        dispatch({
            type: 'GET_DATES',
            payload: podInfo.id
        })
    }, [])



    console.log(podInfo);
    return (
        <>
            <div className="title">
                <h2>MAIN POD PAGE</h2>
                {/* <h3>{user.pod_id}</h3> */}
                <div className="podMemberContainer">
                    {podList.map((member) => (
                        <div key={member.id} className="memberDiv">
                            <p>{member.first_name}</p>
                            <p>{member.last_name}</p>
                            <p>{member.address}</p>
                            <p>{member.phone}</p>
                            <p>{member.email}</p>

                        </div>
                    ))}
                </div>

            </div>
            <div className="adminButtons">
                {user.id == podInfo.admin_id && <button>EDIT POD</button>}
                {user.id == podInfo.admin_id && <button onClick={() => { history.push('/dateform') }}>ADD DATES</button>}
            </div>
        </>
    )

}

export default MainPodPage;