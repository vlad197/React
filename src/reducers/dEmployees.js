const User = (store, action) => {};

export default User;
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
