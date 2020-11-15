import axios from 'axios'

const api  = axios.create({
   //baseURL: 'https://megahack5-server.herokuapp.com'
   baseURL: 'http://192.168.3.13:3333'
})

export default api;