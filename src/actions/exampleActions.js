import {
    ACTION_TYPE_ERROR,
    ACTION_TYPE_LOADING,
    ACTION_TYPE_SUCCESS,
} from './actionsType';

const actionTypeLoading = () => {
    return {
        type: ACTION_TYPE_LOADING,
    };
};

const actionTypeSuccess = (data) => {
    return {
        type: ACTION_TYPE_SUCCESS,
        data: data,
    };
};

const actionTypeError = () => {
    return {
        type: ACTION_TYPE_ERROR,
    };
};

export const fetchActionType = (id, username) => {
    return (dispatch) => {
        try {
            dispatch(actionTypeLoading());
            // fetch data
            const data = ['data'];
            // const ceva = ceva();

            // if (!ceva) {
            //     throw new Error();
            // }

            dispatch(actionTypeSuccess(data));
        } catch (e) {
            dispatch(actionTypeError());
        }
    };
};
