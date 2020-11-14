import axios from 'axios'

const api  = axios.create({
   baseURL: 'https://megahack5-server.herokuapp.com'
   //baseURL: 'http://192.168.0.2:3333'
})

export default api;