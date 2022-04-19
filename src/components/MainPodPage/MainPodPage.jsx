import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MainPodPage.css'
import { useHistory } from 'react-router-dom';

function MainPodPage() {
    const dispatch = useDispatch();
    const user = useSelector(store => store.user);
    const podList = useSelector(store => store.mainPodReducer);

    useEffect(() => {
        dispatch({
            type: 'GET_USER_POD',
            payload: user.pod_id
        })
    })
    return (
        <>
            <div className="title">
                <h2>MAIN POD PAGE</h2>
                <h3>{user.pod_id}</h3>
                
                    {podList.map((member) => (
                        <div key={member.id}>
                        <p>{member.first_name}</p>
                        <p>{member.last_name}</p>
                        <p>{member.address}</p>
                        <p>{member.phone}</p>
                        <p>{member.email}</p>

                        </div>
                    ))}
                
            </div>
        </>
    )

}

export default MainPodPage;