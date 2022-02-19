import actiontypes from '../../actionTypes';

export const fetchUser = data => {
  return {
    type: actiontypes.FETCH_USER,
    payload: {
      data,
    },
  };
};
export const fetchUserSucess = data => {
  return {
    type: actiontypes.FETCH_USER_SUCCESS,
    payload: {
      data,
    },
  };
};
export const fetchUserFailure = data => {
  return {
    type: actiontypes.FETCH_USER_FAILURE,
    payload: {
      error: data,
    },
  };
};
