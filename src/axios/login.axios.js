import baseAxios from './base.axios.js';

export function validateTokenAxios(accessToken) {
  return baseAxios(accessToken).get('/users/profile')
}

export function kakaoLoginAxios(accessToken) {
  return baseAxios(accessToken).post('/auth/kakao')
}

export function googleLoginAxios(accessToken) {
  return baseAxios(accessToken).post('/auth/google')
}