import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function TableRow({ date }) {

    const dispatch = useDispatch();
    const user = useSelector(store => store.user);
    const podInfo = useSelector(store => store.podInfoReducer);

    const handleDelete = () => {
        console.log('the date id is', date.id);

        dispatch({
            type: 'DELETE_DATE',
            payload: date.id
        })


    }

    const handleAddHost = () => {
        dispatch({
            type: 'ADD_NEW_HOST',
            payload: date.id

        })
    }

    const handleCancel = () => {
        dispatch({
            type: 'CANCEL_HOST',
            payload: date.id
        })
    }



    return (
        <>
            <tr>
                <td>{date.date}</td>
                <td>{date.host == 'NEEDS HOST' ? <button onClick={handleAddHost}>HOST</button> : <p>{date.host}</p>}</td>
                <td>{user.id == podInfo.admin_id ? <button onClick={handleDelete}>DELETE</button> : <p></p>}</td>
                <td>{date.host == user.last_name && <button onClick={handleCancel}>CANCEL</button>}</td>
            </tr>
        </>
    )
}


export default TableRow;