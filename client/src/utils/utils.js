import axios from 'axios';

export const axiosWithAuth = () => {
  return axios.create({
    baseURL: 'http://localhost:5000/api',
    headers: {
        authorization: localStorage.getItem('token')
    }
  });
}

export const login = credentials => {
  axios.post('http://localhost:5000/api/login', credentials)
    .then(res => {
      console.log(res)
      const token = res.data.data.token;
      localStorage.setItem("token", token);
    })
}