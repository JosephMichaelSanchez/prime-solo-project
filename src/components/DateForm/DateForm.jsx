import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function DateForm() {
    const history = useHistory();
    const dispatch = useDispatch();
    const user = useSelector(store => store.user);
    const podList = useSelector(store => store.mainPodReducer);
    const podInfo = useSelector(store => store.podInfoReducer);
    const [newDate, setNewDate] = useState('');

    useEffect(() => {
        dispatch({
            type: 'GET_USER_POD',
            payload: user.pod_id
        })
        dispatch({
            type: 'GET_POD_INFO',
            payload: user.pod_id
        })
    }, [])

    const handleSubmit = () => {

        if (newDate.length === 10) {
            console.log(newDate);

            const Id = podInfo.id

            const newHostingDate = {
                date: newDate,
                podId: Id
            }

            console.log(newHostingDate);

            dispatch({
                type: 'ADD_NEW_DATE',
                payload: newHostingDate
            })

        } else {
            console.log('not long enough');
        }

        setNewDate('');



    }





    return (
        <>
            <div className="body">
                <h3>THIS IS THE DATE FORM</h3>
                <form>
                    <div>
                        <label htmlFor="newdate">
                            Add New Date:
                            <input
                                type="text"
                                name="newdate"
                                value={newDate}
                                placeholder='YYYY/MM/DD'
                                onChange={(event) => setNewDate(event.target.value)}
                            />
                        </label>
                    </div>
                    <div>
                        <button onClick={handleSubmit}>ADD DATE</button>
                        <div>
                            <button onClick={() => { history.push(`/mainpodpage/${podInfo.id}`) }}>BACK TO POD PAGE</button>
                        </div>
                    </div>


                </form>
            </div>
        </>
    )
}



export default DateForm;