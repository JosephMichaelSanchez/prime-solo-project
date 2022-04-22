import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* podCreatorSaga() {
    yield takeLatest('CREATE_NEW_POD', createPod)
}

function* createPod(action) {
    console.log('IN CREATE POD');

    try {
        yield axios.post('/api/newpod', action.payload)
    } catch {
        console.log('ERROR CREATING NEW POD');

    }

}

export default podCreatorSaga;