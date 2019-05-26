import { call, put } from 'redux-saga/effects';

import api from '~/services/api';

import { Creators as RepositoriesCreators } from '~/store/ducks/repositories';

export function* loadRepositories(action) {
  try {
    const { username } = action.payload;
    const { data } = yield call(api.get, `/users/${username}/repos`);

    yield put(RepositoriesCreators.loadRepositoriesSuccess(data));
  } catch (err) {
    yield put(RepositoriesCreators.loadRepositoriesFailure());
  }
}
