import axios from "axios";
function fetchCars(){
    return axios.get("http://localhost:3001/cars");
}
export {fetchCars};