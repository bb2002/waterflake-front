import baseAxios from "./base.axios";

export function getTrafficStatisticAxios(clientId) {
  const accessToken = localStorage.getItem('token')
  return baseAxios(accessToken).get('/statistics/traffic', {
    params: {
      clientId: clientId
    }
  })
}

export function getConnectionStatisticsAxios(clientId) {
  const accessToken = localStorage.getItem('token')
  return baseAxios(accessToken).get('/statistics/connection', {
    params: {
      clientId: clientId
    }
  })
}