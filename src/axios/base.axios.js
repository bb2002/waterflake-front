import axios from 'axios';

export default function baseAxios() {
  return axios.create({
    baseURL: 'https://wfapi.blbt.app'
  })
}