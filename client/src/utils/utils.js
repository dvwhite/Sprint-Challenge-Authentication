import axios from 'axios';

export const axiosWithAuth = () => {
  return axios.create({
    baseURL: 'http://localhost:5000/api',
    headers: {
        authorization: localStorage.getItem('token')
    }
  });
}

/**
 * @function: Sends a post to log you in and obtain an authentication token for the endpoint
 * @param {*} credentials: The credentials used to authenticate
 * @returns {Promise} promise: The API promise to be resolved in useEffect or componentDidMount
 */
export const login = (credentials, history) => {
  return axios.post("http://localhost:5000/api/login", credentials)
    .then(res => {
      localStorage.setItem("token", res.data.data.token);
      history.push('/jokes');
      return res;
    })
    .catch(err => console.log("Error in actions>login:", err.response));
};

/**
 * @function: Sends a post to log you in and obtain an authentication token for the endpoint
 * @param {*} credentials: The credentials used to authenticate
 * @returns {Promise} promise: The API promise to be resolved in useEffect or componentDidMount
 */
export const register = (user, history) => {
  return axios.post("http://localhost:5000/api/register", user)
    .then(res => {
      history.push('/signin');
      return res;
    })
    .catch(err => console.log("Error in actions>register:", err.response));
};