const User = (store, action) => {};

export default User;
/*

const initialState = {
    actionType: [],
    hasError: false,
    isLoading: false,
}

function acctionTypeSucces (state, action) {
    return {
        actionType: action.data,
        hasError: false,
        isLoading: false
    }
}

function acctionTypeError (state, action) {
    return {
        ...state
        hasError: true,
        isLoading: false
    }
}

function acctionTypeLoading (state, action) {
    return {
        ...state
        isLoading: true
    }
}

const handlers = {
    [ACTION_TYPE_SUCCESS]: acctionTypeSucces,
    [ACTION_TYPE_ERROR]: acctionTypeError,
    [ACTION_TYPE_LOADING]: acctionTypeLoading,
}

export default const actionType = (state = initialState, action) => {
    const handler = handlesrs[action.type];
    
    if (handler) return handler(state, action);
    return state;
}

// get functions

export getActiontype(state) {
    return state.aactionTypec.actionType;
}

export acionTypeError(state) {
    return state.aactionTypec.hasError;
}

export actionTypeIsLoading(state) {
    return state.aactionTypec.isLoading;
}

*/
