import Axios from 'axios';
import {LOGIN_USER, REGISTER_USER, AUTH_USER, TEAM_USER} from './types'

export function loginUser(dataToSubmit) {
    
    const request = Axios.post("http://3.37.214.20:8080/member/sign-in", dataToSubmit)
    .then(response => response.data)

    return {
        type : LOGIN_USER,
        payload : request
    }
}

export function registerUser(dataToSubmit) {
    
    const request = Axios.post('http://3.37.214.20:8080/member/register', dataToSubmit);


    request.then(response => response.data)

    return {
        type : REGISTER_USER,
        payload : request
    }
}



export function teamUser(dataToSubmit) {
    
    const request = Axios.post('http://3.37.214.20:8080/team', dataToSubmit);


    request.then(response => response.data)

    return {
        type : TEAM_USER,
        payload : request
    }
}

export function auth() {

    const request = Axios.get('/api/users/auth')    // get은 body가 필요 없음

    return {
        type : AUTH_USER,
        payload : request
    }
}