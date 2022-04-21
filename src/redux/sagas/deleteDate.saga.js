import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* deleteDateSaga () {
    yield takeLatest('DELETE_DATE', deleteDate);
}

function* deleteDate(action) {
    console.log('in deleteDate saga');
    const date = action.payload;

    try {
        yield axios.delete(`/api/delete/${date}`)
        yield put({type: 'GET_DATES'})
    } catch {
        console.log('ERROR DELETING DATE IN SAGA');
        
    }
    
}

export default deleteDateSaga;