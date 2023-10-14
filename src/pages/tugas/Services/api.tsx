import axios from 'axios';

export const getData = () => {
  return axios
    .get('http://localhost:3004/datas')
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log(err));
};

export const createData = (data: any) => {
  return axios.post('http://localhost:3004/datas', data).catch((err) => console.log(err));
};
