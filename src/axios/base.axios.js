import axios from 'axios';

export default function baseAxios(accessToken) {
  return axios.create({
    baseURL: 'https://wfapi.blbt.app',
    ...(accessToken ? {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    } : {})
  })
}