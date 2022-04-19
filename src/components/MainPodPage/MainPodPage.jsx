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
                <ul>
                    {podList.map((user, i) => (
                        <li key={i}>{user.first_name}</li>
                    ))}
                </ul>
            </div>
        </>
    )

}

export default MainPodPage;