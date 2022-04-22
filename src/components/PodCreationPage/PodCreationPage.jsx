import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function PodCreationPage() {

    const [newPodName, setNewPodName] = useState('')
    const [keyCode, setKeyCode] = useState('')
    const dispatch = useDispatch();

    const handleSubmit = () => {
        console.log('clicked');

        newPod = {
            pod_name: newPodName,
            key_code: keyCode
        }

        dispatch({
            type:'CREATE_NEW_POD',
            payload: newPod
        })

    }

    return (
        <>
            <div className="body">
                <h2>THIS IS THE POD CREATION PAGE</h2>
                <form>
                    <div>
                        <label htmlFor="newdate">
                            Create a name for your new pod:
                            <input
                                type="text"
                                name="newpod"
                                value={newPodName}
                                placeholder='POD NAME'
                                onChange={(event) => setNewPodName(event.target.value)}
                            />
                        </label>
                    </div>
                    <div>
                        <label htmlFor="newpodkeycode">
                            Create a Key Code for your pod:
                            <input
                                type="text"
                                name="newkeycode"
                                value={keyCode}
                                placeholder='KEY CODE'
                                onChange={(event) => setNewPodName(event.target.value)}
                            />
                        </label>
                    </div>
                    <div>
                        <h4>Your Key Code is what you will share with people you want to join your pod.</h4>
                    </div>
                    <div>
                        <button onClick={handleSubmit}>CREATE NEW POD</button>
             
                    </div>


                </form>
                
            </div>
        </>

    )


}

export default PodCreationPage;