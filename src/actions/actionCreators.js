import {
  REQUEST_INIT,
  REQUEST_SUCCESS,
  REQUEST_FAILURE,
  REQUEST_NOTFOUND
} from '../config/constants';

const showLoader = {
  isFetching: true
};

export const ready = (callback, options = showLoader) => {
  const initRequestAction = {
    type: REQUEST_INIT,
    payload: options.isFetching
  };

  return (dispatch, getState) => {
    return Promise.resolve(dispatch(initRequestAction)).then(() =>
      callback(dispatch, getState)
    );
  };
};

export const fetchCreator = (type, response) => {
  // formatting actual response to targeted state for reducer
  const data = response.data || [];

  return {
    type,
    payload: {
      data
    }
  };
};

// Success creator
export const successCreator = message => ({
  type: REQUEST_SUCCESS,
  payload: { seccessMessage: message }
});

// Failure creator
export const failureCreator = message => ({
  type: REQUEST_FAILURE,
  payload: { seccessMessage: message }
});

// Not Found Creator
export const notFoundCreator = message => ({
  type: REQUEST_NOTFOUND,
  payload: { seccessMessage: message }
});
