import { all, takeLatest } from 'redux-saga/effects';

import { Types as LoginTypes } from '~/store/ducks/login';
import { Types as RepositoriesTypes } from '~/store/ducks/repositories';

import { login } from './login';
import { loadRepositories } from './repositories';

export default function* rootSaga() {
  return yield all([
    takeLatest(LoginTypes.LOGIN_REQUEST, login),
    takeLatest(RepositoriesTypes.LOAD_REPOSITORIES_REQUEST, loadRepositories),
  ]);
}
