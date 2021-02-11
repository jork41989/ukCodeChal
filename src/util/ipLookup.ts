import axios from 'axios';
export const getLocation = (ipAddress: string) => {
  return axios.get(`https://ipapi.co/${ipAddress}/json`)
}