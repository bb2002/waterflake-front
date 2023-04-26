import baseAxios from './base.axios';

export function getAllTunnelsAxios() {
  const accessToken = localStorage.getItem('token')
  return baseAxios(accessToken).get('/tunnels')
}

export function createTunnelAxios(form) {
  const accessToken = localStorage.getItem('token')
  return baseAxios(accessToken).post('/tunnels/new', form)
}

export function getTunnelAxios(id) {
  const accessToken = localStorage.getItem('token')
  return baseAxios(accessToken).get(`/tunnels/${id}`)
}

export function editTunnelAxios(clientId, data) {
  const accessToken = localStorage.getItem('token')
  return baseAxios(accessToken).patch(`/tunnels/${clientId}`, data)
}