import axios from "axios";


const LOGIN_BASE_REST_API_URL = "http://localhost:8080/register";

class RegistrationService  {
  
    createLogin(login) {
        return axios.post(LOGIN_BASE_REST_API_URL, login);
      }
}
export default new RegistrationService();