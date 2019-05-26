import { call, put } from 'redux-saga/effects';

import api from '~/services/api';
import { navigate } from '~/services/navigation';

import { Creators as LoginCreators } from '~/store/ducks/login';

export function* login(action) {
  try {
    const { username } = action.payload;
    yield call(api.get, `/users/${username}`);

    yield put(LoginCreators.loginSuccess(username));

    navigate('Repositories');
  } catch (err) {
    yield put(LoginCreators.loginFailure());
  }
}
