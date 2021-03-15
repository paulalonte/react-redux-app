import * as ActionTypes from '../actions/Actions';

const initialState =
{
    productSelected: {},
    products: [
        {
            category: 'Dessert',
            categoryId: 0,
            items: [
                {
                    id: 0,
                    name: 'Cake',
                    desc: 'This is my cake',
                    price: 30,
                    qty: 0,
                    totalPrice: 0
                },
                {
                    id: 1,
                    name: 'Tuna Pasta',
                    desc: 'This is my pasta tuna',
                    price: 30,
                    qty: 0,
                    totalPrice: 0
                }
            ]
        },
        {
            category: 'Appetizer',
            categoryId: 1,
            items: [
                {
                    id: 2,
                    name: 'Soup',
                    desc: 'This is my Soup',
                    price: 30,
                    qty: 0,
                    totalPrice: 0
                },
                {
                    id: 3,
                    name: 'Biscuit',
                    desc: 'This is my Biscuit',
                    price: 30,
                    qty: 0,
                    totalPrice: 0
                }
            ]
        },
        {
            category: 'Main Course',
            categoryId: 2,
            items: [
                {
                    id: 10,
                    name: 'Beef Steak',
                    desc: 'This is my Beef',
                    price: 120,
                    qty: 0,
                    totalPrice: 0
                },
                {
                    id: 11,
                    name: 'Shrimp Gambas',
                    desc: 'This is my Shrimp',
                    price: 180,
                    qty: 0,
                    totalPrice: 0
                },
                {
                    id: 12,
                    name: 'Pork Belly',
                    desc: 'This is my Pork',
                    price: 100,
                    qty: 0,
                    totalPrice: 0
                }
            ]
        }
    ]
} 

export const menuListReducer = (state = initialState, action) => {
    switch(action.type) {
        case ActionTypes.GET_MENU_LIST:        
            return state;
        case ActionTypes.GET_MENU_ITEM:
            return { ...state, productSelected: findProductSelected(state, action) };
        default:
            return state;
    }
}

const findProductSelected = (state, action) => {
    let selected;
    for(let category of state.products) {
        for(let item of category.items) {
            if(item.id === action.payload.id) {
                selected = item;
                break;
            }
        }
    }    
    return selected;
}