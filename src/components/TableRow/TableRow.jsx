import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function TableRow({ date }) {

    return (
        <>
            <tr>
                <td>{date.date}</td>
                <td>HOST PLACEHOLDER</td>
                <td><button>DELETE</button></td>
            </tr>
        </>
    )
}


export default TableRow;