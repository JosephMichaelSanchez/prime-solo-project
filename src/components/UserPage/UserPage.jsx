import React, {useEffect} from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  const history = useHistory();
  const podInfo = useSelector(store => store.podInfoReducer);
  const {Id} = useParams();
  const dispatch = useDispatch();
  

  console.log(Id);
  


  useEffect(() => {
    dispatch({
        type: 'GET_USER_POD',
        payload: user.pod_id
    })
    dispatch({
        type: 'GET_POD_INFO',
        payload: user.pod_id
    })
    dispatch({
        type: 'GET_DATES',
        payload: podInfo.id
    })

    if (user.pod_id < 1) {
      history.push('/podquestionpage')
    }
}, [])

  return (
    <div className="container">
      <h2>Welcome, {user.username}!</h2>
      <p>Your ID is: {user.id}</p>
      <LogOutButton className="btn" />
      <button onClick={() => { history.push(`/mainpodpage/${podInfo.id}`) }}>GO TO POD</button>
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
