import * as ActionTypes from './Actions';

export const addOrder = (dispatch, item) => {
    dispatch({ type: ActionTypes.ADD_ORDER_ITEM, payload: { item: item }});
}

export const deleteOrder = (dispatch, id) => {
    dispatch({ type: ActionTypes.DELETE_ORDER_ITEM, payload: { id: id }});
}

export const incrementQuantity = (dispatch, id) => {
    dispatch({ type: ActionTypes.INCREMENT_QUANTITY, payload: { id: id }});
}

export const decrementQuantity = (dispatch, id) => {
    dispatch({ type: ActionTypes.DECREMENT_QUANTITY, payload: { id: id }});
}
