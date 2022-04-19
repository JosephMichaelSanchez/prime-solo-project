import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './PodJoinConfirmationPage.css'
import {useHistory} from 'react-router-dom';

function PodJoinConfirmationPage() {
    const dispatch = useDispatch();
    const history = useHistory();

    const podName = useSelector(store => store.podReducer.pod_name)
    const podId = useSelector(store => store.podReducer.id)
    const userId = useSelector(store => store.user.id)

    const handleSubmit = () => {
        console.log(podName);
        console.log(podId)
        console.log(userId);

        dispatch({
            type: 'JOIN_POD',
            payload: {
                userId: userId, 
                podId: podId
            }
        })
        history.push('/mainpodpage');

    }

    return (
        <>
            <div className="body">
                <h2>PodJoin Confirmation Page</h2>
                <h3>You are attempting to join:</h3> 
                    <h2>{podName}</h2>
                <h3>If this is correct, hit 'JOIN POD'.</h3>
                <h3>If this is incorrect, hit the 'BACK' button and enter your Key Code again.</h3>
                <button onClick={handleSubmit}>JOIN POD</button>
                <button onClick={() => {history.push('/podquestionpage');}}>BACK</button>
            </div>
        </>
    )

}

export default PodJoinConfirmationPage;