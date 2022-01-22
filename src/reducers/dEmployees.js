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