import { SHOW_MODAL, HIDE_MODAL } from '../config/constants';

const initialState = {
  show: false,
  name: ''
};

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_MODAL:
      return { ...state, show: true, name: action.name };
    case HIDE_MODAL:
      return { ...state, show: false };
    default:
      return state;
  }
};

export default modalReducer;
