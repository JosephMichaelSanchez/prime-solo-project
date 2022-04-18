import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* podFinderSaga() {
    yield takeLatest('FIND_POD', getPod);
}

function* getPod(action) {
    console.log('in getPod saga');
    
    const keyCode = action.payload
    try {
    const pod = yield axios.get(`/api/pod/${keyCode}`)
    yield put({type:'SET_POD', payload: pod.data})
    } catch {
        console.log('ERROR GETTING POD');
        
    }
}

export default podFinderSaga;