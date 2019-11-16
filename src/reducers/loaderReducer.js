import { REQUEST_INIT } from '../config/constants';

export default (state, action) => {
  return action.type === REQUEST_INIT && action.payload === true;
};
