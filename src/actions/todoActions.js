import axios from 'axios';
import { ready, fetchCreator, successCreator } from './actionCreators';

export function addTodo() {
  return ready(dispatch => {
    axios
      .get('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => {
        dispatch(fetchCreator('STORE_DATE', response));
      })
      .then(() => {
        dispatch(successCreator('Success'));
      })
      .catch(error => console.error(error));
  });
}
