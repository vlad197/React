import { ACTION_TYPES } from "../actions/dEmployees";

const initialState = {
    list:[]
}
export const dEmployees = (state=initialState,action) => {

switch(action.type) {

case ACTION_TYPES.FETCH_ALL:
    return {
        ...state,
        list:[...action.payload]
    }
    break;
    default:
        return state

}


}

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
