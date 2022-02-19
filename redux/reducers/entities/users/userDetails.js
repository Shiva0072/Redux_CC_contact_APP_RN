import actiontypes from '../../../actions/actionTypes';

const initialState = {
  loading: true,
  user: null,
  error: null,
};

export default details = (state = initialState, {type, payload}) => {
  // console.log(payload);
  switch (type) {
    case actiontypes.FETCH_USER_DETAILS:
      return state;

    case actiontypes.FETCH_USER_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        user: payload.user,
      };
    case actiontypes.FETCH_USER_DETAILS_FAILURE:
      return {
        ...state,
        loading: false,
        user: {},
        error: payload.error,
      };
    default:
      return state;
  }
};
