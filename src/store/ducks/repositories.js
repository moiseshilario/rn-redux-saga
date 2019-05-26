/**
 * Action Types
 */
export const Types = {
  LOAD_REPOSITORIES_REQUEST: 'LOAD_REPOSITORIES_REQUEST',
  LOAD_REPOSITORIES_SUCCESS: 'LOAD_REPOSITORIES_SUCCESS',
  LOAD_REPOSITORIES_FAILURE: 'LOAD_REPOSITORIES_FAILURE',
};

/**
 * Action Creators
 */
export const Creators = {
  loadRepositoriesRequest: username => ({
    type: Types.LOAD_REPOSITORIES_REQUEST,
    payload: { username },
  }),
  loadRepositoriesSuccess: data => ({
    type: Types.LOAD_REPOSITORIES_SUCCESS,
    payload: { data },
  }),
  loadRepositoriesFailure: () => ({
    type: Types.LOAD_REPOSITORIES_FAILURE,
  }),
};

/**
 * Reducer
 */

const INITIAL_STATE = {
  data: [],
  loading: false,
  error: false,
};

export default function repositories(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.LOAD_REPOSITORIES_REQUEST:
      return { ...state, loading: true };
    case Types.LOAD_REPOSITORIES_SUCCESS:
      return { data: action.payload.data, loading: false, error: false };
    case Types.LOAD_REPOSITORIES_FAILURE:
      return { ...state, loading: false, error: true };
    default:
      return state;
  }
}
