import { createStore, combineReducers } from 'redux';
import { menuListReducer } from './reducers/MenuListReducer';
import { orderListReducer } from './reducers/OrderListReducer';

const reducers = combineReducers({
    menuListReducer: menuListReducer,
    orderListReducer: orderListReducer
})

const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;