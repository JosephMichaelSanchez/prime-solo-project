import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* podInfoSaga() {
    yield takeLatest('GET_POD_INFO', getPodInfo);
}

function* getPodInfo(action) {
    console.log('in getPodInfo');
    const pod = action.payload
    try {
        const podInfo = yield axios.get(`api/podinfo/${pod}`)
        yield put({type: 'SET_POD_INFO', payload: podInfo.data})
        console.log(podInfo.data);
        
    } catch {
        console.log('ERROR GETTING POD INFO');
        
    }
    
}


export default podInfoSaga;