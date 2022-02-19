import actiontypes from '../../actionTypes';

export const fetchUserDetails = id => {
  return {
    type: actiontypes.FETCH_USER_DETAILS,
    payload: {
      id: id,
    },
  };
};

export const fetchUserDetailsSuccess = user => {
  return {
    type: actiontypes.FETCH_USER_DETAILS_SUCCESS,
    payload: {
      user,
    },
  };
};

export const fetchUserDetailsFailure = error => {
  return {
    type: actiontypes.FETCH_USER_DETAILS_FAILURE,
    payload: {
      error,
    },
  };
};
