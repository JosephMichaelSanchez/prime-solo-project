import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* podJoinerSaga () {
    yield takeLatest('JOIN_POD', joinPod);
}

function* joinPod(action){
    console.log('in joinPod saga');
    
}

export default podJoinerSaga;