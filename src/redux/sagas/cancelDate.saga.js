import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* cancelHostSaga() {
    yield takeLatest('ADD_NEW_HOST', cancelHost);
}

function* cancelHost(action) {
    console.log('in cancelHost');
    const date = action.payload
    
    try {
        const response = yield axios.put(`api/cancel/${date}`)
        yield put({type: 'GET_DATES', payload: response.data.pod_id})
        
        
    } catch {
        console.log('ERROR IN CANCEL HOST SAGA');
        
    }
}

export default cancelHostSaga;