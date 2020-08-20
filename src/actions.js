import { 
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
} from './constants.js';

export const setSearchField = (text) => {
  return {
    type: CHANGE_SEARCH_FIELD,
    payload: text
  }
}

export const requestRobots = () => async (dispatch) => {
  dispatch({ type: REQUEST_ROBOTS_PENDING });
  try {
    const getUsers = await fetch('https://jsonplaceholder.typicode.com/users');
    const response = await getUsers.json();
    const data = dispatch({ 
      type: REQUEST_ROBOTS_SUCCESS, 
      payload: response})
    return data;
  } catch(error) {
    dispatch({ 
      type: REQUEST_ROBOTS_FAILED,
      payload: error
    })
  }
}