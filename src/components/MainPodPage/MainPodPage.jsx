import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MainPodPage.css'
import { useHistory } from 'react-router-dom';
import PodMember from '../PodMember/PodMember';

function MainPodPage() {
    const dispatch = useDispatch();
    const user = useSelector(store => store.user);
    const podList = useSelector(store => store.mainPodReducer);

    useEffect(() => {
        dispatch({
            type: 'GET_USER_POD',
            payload: user.pod_id
        })
        dispatch({
            type: 'GET_POD_INFO',
            payload: user.pod_id
        })
    },[])
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
        </>
    )

}

export default MainPodPage;