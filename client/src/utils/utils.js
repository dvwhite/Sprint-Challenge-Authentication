import axios from 'axios';

export const axiosWithAuth = () => {
  return axios.create({
    baseURL: 'https://devdeskbe.herokuapp.com',
    headers: {
        authorization: localStorage.getItem('token')
    }
  });
}