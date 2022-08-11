import axios from "axios"

const baseURL = process.env.BACKEND_URL
//need baseURL from backend

export default axios.create({
    baseURL:baseURL
})