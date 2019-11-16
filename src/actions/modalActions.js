import { SHOW_MODAL, HIDE_MODAL } from '../config/constants';
import { ready } from './actionCreators';

//show modal
export const showModal = (options = {}, params = {}) => {
  const { name, title } = options;
  return ready(dispatch => dispatch({ type: SHOW_MODAL, name, title, params }));
};

//hide modal
export const hideModal = () => {
  return ready(dispatch => dispatch({ type: HIDE_MODAL }));
};
