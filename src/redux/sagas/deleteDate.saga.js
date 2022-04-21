import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* deleteDateSaga () {
    yield takeLatest('DELETE_DATE', deleteDate);
}

function* deleteDate(action) {
    console.log('in deleteDate saga');
    const date = action.payload;

    try {
        const response = yield axios.delete(`/api/delete/${date}`)
        yield put({type: 'GET_DATES', payload: response.data.pod_id})
    } catch {
        console.log('ERROR DELETING DATE IN SAGA');
        
    }
    
}

export default deleteDateSaga;