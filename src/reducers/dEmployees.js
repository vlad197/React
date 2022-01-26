import { DELETE_USER } from "../actions/api";

export const GET_USERS = "GET_USERS";

const initialState = {
    users: [],
    user: {}
    
};


const fetchUser = (state = initialState, action) => {
    switch(action.type) {
        case GET_USERS:
            return {
                ...state,
                users: action.user
            };
            
        case DELETE_USER:
            return {
                ...state
            };
            default:
                return state;
    }
};

/*

fetchUser (state, action) {
    return {
        ...state, user: action.user
    }
}

const handlers = {
    [FETCH_USER]: fetchUser,
    [FETCH_USER1]: fetchUser1,
    [FETCH_USER2]: fetchUser2,
    [FETCH_USER3]: fetchUser3
}

export default const emplyeesData = (state, action) => {
    const handler = handlesrs[action.type];
    
    if (handler) return handler(state, action);
    return state;
}

// get functions

export getList(state) {
    return state.emplyeesData.list;
}

*/
