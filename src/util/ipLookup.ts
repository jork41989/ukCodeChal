import axios from 'axios';
axios.defaults.headers.get["User-Agent"] = "keycdn-tools:https?://.*"
export const getLocation = (ipAddress: string) => {
  console.log(ipAddress)
  return axios.get(`https://tools.keycdn.com/geo.json?host=${ipAddress}`)
}