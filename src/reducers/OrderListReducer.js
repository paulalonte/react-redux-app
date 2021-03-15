import * as ActionTypes from '../actions/Actions';


export const orderListReducer = (state = { orderSelected: {}, orders: [], totalPrice: 0, totalQuantity: 0 }, action) => {
    switch(action.type) {
        case ActionTypes.ADD_ORDER_ITEM:
            return addOrder(state, action.payload.item)
        case ActionTypes.DELETE_ORDER_ITEM:
            return deleteItem(state, action)
        case ActionTypes.INCREMENT_QUANTITY:
            return updateItem(ActionTypes.INCREMENT_QUANTITY, state, action);
        case ActionTypes.DECREMENT_QUANTITY:
            return updateItem(ActionTypes.DECREMENT_QUANTITY, state, action);
        default:
            return state;
    }
}

const deleteItem = (state, action) => {
    const updatedOrders = state.orders.filter(order => order.id !== action.payload.id);

    const totalProductsPrice = computeTotalPrice(updatedOrders);
    const totalQuantity = computeTotalQty(updatedOrders);
    return { ...state, totalPrice: totalProductsPrice, orders: updatedOrders, totalQuantity: totalQuantity}
}

// update the item for increment/decrement
const updateItem = (actionType, state, action) => {
    const updatedOrders = state.orders.map(order => {
        if(order.id === action.payload.id) {
            let updateQuantity;
            if(actionType === ActionTypes.INCREMENT_QUANTITY) {
                updateQuantity = order.qty + 1;
            }

            if(actionType === ActionTypes.DECREMENT_QUANTITY) {
                updateQuantity = order.qty - 1;
                if(updateQuantity <= 0) {
                    return { ...order }
                }
            }
            const updateTotalPrice = order.price * updateQuantity;
            return {...order, qty: updateQuantity, totalPrice: updateTotalPrice }
        }
        return order;
    });

    const totalProductsPrice = computeTotalPrice(updatedOrders);
    const totalQuantity = computeTotalQty(updatedOrders);
    const currentOrder = updatedOrders.find(order => order.id === action.payload.id);
    return { ...state, orderSelected: currentOrder, totalPrice: totalProductsPrice, orders: updatedOrders, totalQuantity: totalQuantity}
}

const addOrder = (state, item) => {
    if(state.orders.length > 0) {
        const ifExists = state.orders.some(orderItem => orderItem.id === item.id);
        if(ifExists) {
            return { ...state };
        }else {
            return createAddOrderItem(state, item);
        }
    }else {
        return createAddOrderItem(state, item);    
    }
}

const createAddOrderItem = (state, item) => {
    const updateQuantity = item.qty + 1;
    const updateTotalPrice = item.price * updateQuantity;
    const updatedOrders = [...state.orders, {...item, qty: updateQuantity, totalPrice: updateTotalPrice}];
    const totalProductsPrice = computeTotalPrice(updatedOrders);
    const totalQuantity = computeTotalQty(updatedOrders);
    const currentOrder = updatedOrders.find(order => order.id === item.id);
    return { ...state, orderSelected: currentOrder, orders: updatedOrders, totalPrice: totalProductsPrice, totalQuantity: totalQuantity};
}

const computeTotalQty = (orders) => {
        const totalQty = orders.reduce((acc, curr) => {
            return acc + curr.qty;
        }, 0)

        return totalQty;
}

const computeTotalPrice = (orders) => {
    const totalPrice = orders.reduce((acc, curr) => {
        return acc + curr.totalPrice;
    }, 0)
    return totalPrice;
}

