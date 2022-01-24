import api from "./api";

export const FETCh_ceva = 'fetch_ceva';

export const ACTION_TYPES = {
    CREATE: 'CREATE',
    UPDATE:'UPDATE',
    DELETE:'DELETE',
    FETCH_ALL:'FETCH_ALL'
}

export const fetchAll = () => dispatch =>
{
    api.dEmployees()
    .then(
        response => {
            dispatch({
                type: ACTION_TYPES.FETCH_ALL,
                payload:response.data
                })
        }
    )
    .catch(err => console.log(err))
    

}



