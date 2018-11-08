// import axios from 'axios';

const initialState = {
    username: '',
    profile_pic: '' 
}

const GET_USER = "GET_USER";

export default function reducer(state= initialState, action){
    switch (action.type) {
        case GET_USER:
        return {
            username: action.payload.username,
            profile_pic: action.payload.profile_pic
        }

        default: return state; 
    }
}

export function getUser(username, profile_pic){
    return {
        type: GET_USER,
        payload: {username, profile_pic}
    }
}