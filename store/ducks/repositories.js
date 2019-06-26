import github from '../../services/github';

// Action Types
export const Types = {
  FETCH: '@@repositories/FETCH',
  LOADING: '@@repositories/LOADING'
};

// Reducer
const INITIAL_STATE = {
  data: [],
  loading: false,
  error: false
};

export default function repositories(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.LOADING:
      return { ...state, loading: true };

    case Types.FETCH:
      return { ...state, data: action.payload, loading: false };

    default:
      return state;
  }
}

// Action: fetchByUser
export const Actions = {
  fetchByUser: username => async dispatch => {
    dispatch({ type: Types.LOADING });
    const response = await github.get(`/users/${username}/repos`);
    dispatch({ type: Types.FETCH, payload: response.data });
  }
};
