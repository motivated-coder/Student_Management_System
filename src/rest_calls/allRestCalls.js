import axios from 'axios';

const baseUrl = "http://localhost:8099/api/v1"

// Add a request interceptor
axios.interceptors.request.use(function (config) {

    config.headers['Authorization'] = getToken();

    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

export const proceedForLogin = (student) => axios.post(baseUrl + "/student/login", student)

export const register = (student) => axios.post(baseUrl + "/student/register", student)

export const getAllStudents = () => axios.get(baseUrl + "/admin/student/all")

export const storeToken = (token) => localStorage.setItem("token", token)

export const getToken = () => localStorage.getItem("token")