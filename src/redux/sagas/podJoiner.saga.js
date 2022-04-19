import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* podJoinerSaga () {
    yield takeLatest('JOIN_POD', joinPod);
}

function* joinPod(action){
    console.log('in joinPod saga');
    const newPod = action.payload;
    console.log(newPod.userId, newPod.podId);
    
    try {
    yield axios.put('/api/join', newPod)
    } catch {
        console.log('error in PUT');
        }
}

export default podJoinerSaga;