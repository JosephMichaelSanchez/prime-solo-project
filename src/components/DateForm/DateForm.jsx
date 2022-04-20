import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function DateForm() {
    const [newDate, setNewDate] = useState('');


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
                                required
                                placeholder='YYYY/MM/DD'
                                onChange={(event) => setNewDate(event.target.value)}
                            />
                        </label>
                    </div>

                </form>
            </div>
        </>
    )
}



export default DateForm;