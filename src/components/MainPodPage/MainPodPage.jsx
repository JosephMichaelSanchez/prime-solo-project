import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MainPodPage.css'
import { useHistory } from 'react-router-dom';

function MainPodPage() {
    const dispatch = useDispatch();
    const user = useSelector(store => store.user);

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
            </div>
        </>
    )

}

export default MainPodPage;