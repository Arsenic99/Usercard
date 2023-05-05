import axios from "axios"

export const userAPI = (page) => {
    return axios.get(`https://reqres.in/api/users?page=${page}`);
}