// import axios from 'axios';

const initialState = {
    username: '',
    id: 0,
    profile_pic: '' 
}

const GET_USER = "GET_USER"

export default function reducer(state= initialState, action){
    switch (action.type) {
        case GET_USER:
        return {
            username: action.payload.username,
            id: action.payload.id,
            profile_pic: action.payload.profile_pic
        }

        default: return state; 
    }
}

export function getUser(id, username, profile_pic){
    return {
        type: GET_USER,
        payload: {id, username, profile_pic}
    }
}