import baseAxios from './base.axios.js';

export function validateTokenAxios(accessToken) {
  return baseAxios().get('/users/profile', {
    headers: {
      'Authorization': `Bearer ${accessToken}`
    }
  })
}

export function kakaoLoginAxios(accessToken) {
  return baseAxios().post('/auth/kakao', {}, {
    headers: {
      'Authorization': `Bearer ${accessToken}`
    }
  })
}