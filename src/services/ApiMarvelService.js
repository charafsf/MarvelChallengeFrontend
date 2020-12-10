import axios from 'axios'

const Marvel_API_BASE_URL = ""

class ApiMarvelService {
    getPersonageMarvel(){
        return axios.get(Marvel_API_BASE_URL);
       }
  
}
export default new ApiMarvelService()