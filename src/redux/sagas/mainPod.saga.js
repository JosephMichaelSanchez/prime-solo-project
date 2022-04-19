import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* mainPodSaga() {
    yield takeLatest('GET_USER_POD', getUserPod);
}

function* getUserPod(action) {
    console.log('in getUserPod');
    const userPod = action.payload
    try {
        const thePod = yield axios.get(`api/mainpod/${userPod}`)
        yield put({type: 'SET_MAIN_POD', payload: thePod.data})
        console.log(thePod.data);
        
    } catch {
        console.log('ERROR GETTING MAIN POD');
        
    }
    
}

export default mainPodSaga;