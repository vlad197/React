import axios from "axios";

const baseUrl = "http://localhost:50861/api/"

export const GET_USERS = "GET_USERS";
export const DELETE_USER = "DELETE_USER";
export const users = {
    username: "username",
    password: "password"
}


function fetchUser(payload) {
    return {
        type: GET_USERS,
        payload: users
}
}

export function getUserFromBackend(payload) {
    return (dispatch) => {
      return  axios.get(`${baseUrl}`).then((resp) => {
          console.log("resp", resp);
          dispatch(fetchUser(resp.data));
      }).catch((error) => console.log(error));
}
}

const userDeleted = () => ({
    type:DELETE_USER
})

export const deleteUser = (id) => {
    return function(dispatch) {
        axios.delete(`${baseUrl}/${id}`)
        .then((resp) => {
            console.log("user deleted", resp);
            dispatch(userDeleted());
            dispatch(getUserFromBackend());
        }).catch((error) => console.log(error));
    }
}

 //payload: { username: vlad, password: parola }

/*function fetchUser(payload) {
    return {
        type: FETCH_USER,
        payload: payload
}

function getUserFromBackend(payload) {
    return (dispatch) => {
        return axios.get()....
}
*/

/*
export default {

    dEmployees(url=baseUrl + 'DEmployees/'){
            return {
                fetchAll : () => axios.get(url),
                fetchById: id => axios.get(url+id),
                create : newRecord => axios.post(url,newRecord),
                update: (id, updateRecord) => axios.put(url+id, updateRecord),
                delete: id => axios.delete(url+id)

            }


    }
}
*/

//export default getUserFromBackend;
