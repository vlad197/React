import React from 'react';
import { useSelector, useDispatch, connect } from 'react-redux';
import { fetchActionType } from '../actions/exampleActions';

const DEmployeesForm = (props) => {
    const actionTypeData = useSelector((state) => state.aactionTypec.hasError);
    const actionTypeData1 = useSelector(
        (state) => state.aactionTypec.isLoading
    );
    const actionTypeData2 = useSelector(
        (state) => state.aactionTypec.actionType
    );

    const dispatch = useDispatch();

    React.useEffect(() => {
        props.fetchActionType();
    }, [dispatch]);

    const ceva = props.acionTypeError;

    // actionTypeData.hasError

    return (
        <div>
            {props.actionType.map(() => {
                return null;
            })}
        </div>
    );
};

const mapStateToProps = {
    actionType: getActiontype(),
    actionTypeHasError: acionTypeError(),
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchActionType: dispatch(fetchActionType()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DEmployeesForm);
