import axios from "axios";


const LOGIN_BASE_REST_API_URL = "http://localhost:8080/addjob";

class PortalService  {
  addJob(name) {
    return axios.post(LOGIN_BASE_REST_API_URL,name);
  }
}
export default new PortalService;
