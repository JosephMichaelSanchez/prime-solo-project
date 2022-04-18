import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './PodQuestionPage.css'

function PodQuestionPage() {

    const [keyCode, setKeyCode] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(keyCode);

        dispatch({
            type: 'FIND_POD',
            payload: keyCode
        })
    }

    return (
        <>
            <div className="body">
                <h2>POD QUESTION PAGE</h2>
                <h3>Will you be joining an existing pod, or creating a new one?</h3>
                <button onClick={handleSubmit}>JOINING A POD WITH THIS KEY CODE</button>
                <input type="text" name="keyCode" placeholder='KEY CODE' onChange={(event) => setKeyCode(event.target.value)}/>
            </div>
        </>
    )
}


export default PodQuestionPage;