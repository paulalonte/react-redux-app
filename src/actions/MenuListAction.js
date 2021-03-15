import * as ActionTypes from './Actions';

export const getMenuList = (dispatch) => {
    dispatch({ type: ActionTypes.GET_MENU_LIST });
}

export const getMenuItem = (dispatch, id) => {
    dispatch({ type: ActionTypes.GET_MENU_ITEM, payload: { id: id }});
}
