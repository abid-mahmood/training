import { take, put, call } from 'redux-saga';
import { ADD_USER_REQUEST } from '../constants';

function xyz(a, b, c) {
  return axios({
    url,
    body,
    headers,
  });
}

function* watchAddUserRequest() {
  const addUserCall = yield call(xyz, a, b, c);

  // const name = 'x-y-z'
  // const name = 'x-y-z'.trim('-'); // x y z 

  addUserCall.success((res) => {
    const payload = filterResp(res); // Redux logic, transform, process
    put(addUserSuccess(payload)); // dispatch(addUserSuccess(payload))
  })

  addUserCall.failure((res) => {
    const payload = filterResp(res);
    put(addUserFailure(payload));
  })
}

take(ADD_USER_REQUEST, watchAddUserRequest());
take(DELETE_USER_REQUEST, watchDeleteUserRequest());