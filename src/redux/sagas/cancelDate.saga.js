import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* cancelDateSaga() {
    yield takeLatest('ADD_NEW_HOST', cancelDate);
}

function* cancelDate(action) {
    console.log('in addHost');
    const date = action.payload
    
    try {
        const response = yield axios.put(`api/cancel/${date}`)
        yield put({type: 'GET_DATES', payload: response.data.pod_id})
        
        
    } catch {
        console.log('ERROR IN CANCEL DATE SAGA');
        
    }
}

export default cancelDateSaga;