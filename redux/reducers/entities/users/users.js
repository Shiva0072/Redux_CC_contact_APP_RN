import actiontypes from '../../../actions/actionTypes';

const initialState = {
  loading: true,
  users: null,
  error: null,
};

export default users = (state = initialState, {type, payload}) => {
  // console.log('action recieved : ', type, ' and payload  =', payload);
  switch (type) {
    case actiontypes.FETCH_USER:
      return state;

    case actiontypes.FETCH_USER_SUCCESS:
      return {
        ...state,
        users: payload.data,
        loading: false,
      };

    case actiontypes.FETCH_USER_FAILURE:
      return {
        ...state,
        users: null,
        loading: false,
        error: payload.data,
      };
    default:
      return state;
  }
};
