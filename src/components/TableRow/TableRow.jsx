import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function TableRow({ date }) {

    const dispatch = useDispatch();

    const handleDelete = () => {
        console.log('the date id is', date.id);

        dispatch({
            type: 'DELETE_DATE',
            payload: date.id
        })


    }

    return (
        <>
            <tr>
                <td>{date.date}</td>
                <td>HOST PLACEHOLDER</td>
                <td><button onClick={handleDelete}>DELETE</button></td>
            </tr>
        </>
    )
}


export default TableRow;