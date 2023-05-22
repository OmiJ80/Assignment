import axios from "axios";


const LOGIN_BASE_REST_API_URL = "http://localhost:8080/login";

class LoginService  {
  getLoginbyid(name) {
    return axios.post(LOGIN_BASE_REST_API_URL,name);
  }
}
export default new LoginService();