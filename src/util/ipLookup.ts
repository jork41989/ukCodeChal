import axios from 'axios';

export const getLocation = (ipAddress: string) => {
  console.log(ipAddress)
  return axios.get(`https://tools.keycdn.com/geo.json?host=${ipAddress}`)
}