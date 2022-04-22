import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* newDateSaga() {
    yield takeLatest('ADD_NEW_DATE', addNewDate)
}

function* addNewDate(action) {
    console.log('IN NEW DATE');
    
    try {
        yield axios.post('/api/newdate', action.payload);
    } catch {
        console.log('ERROR POSTING NEW DATE');
        
    }
}


export default newDateSaga;