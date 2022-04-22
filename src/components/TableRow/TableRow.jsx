import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function TableRow({ date }) {

    const dispatch = useDispatch();
    const user = useSelector(store => store.user);

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



    return (
        <>
            <tr>
                <td>{date.date}</td>
                <td>{date.host == 'NEEDS HOST' ? <button onClick={handleAddHost}>HOST</button> : <p>{date.host}</p>}</td>
                <td><button onClick={handleDelete}>DELETE</button></td>
                <td>{date.host == user.last_name && <button>CANCEL</button>}</td>
            </tr>
        </>
    )
}


export default TableRow;