import axios from "axios";

axios.defaults.baseURL = 'https://home-shots-backend-ed9334030b78.herokuapp.com/';
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';
axios.defaults.withCredentials = true;

