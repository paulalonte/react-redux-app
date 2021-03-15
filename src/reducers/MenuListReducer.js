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
                    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et porttitor velit, eu dapibus enim. Curabitur rhoncus pretium rutrum. Nulla facilisi. Nulla maximus sed magna non placerat. Ut in porttitor eros, et finibus odio. ',
                    price: 30,
                    qty: 0,
                    totalPrice: 0
                },
                {
                    id: 1,
                    name: 'Tuna Pasta',
                    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et porttitor velit, eu dapibus enim. Curabitur rhoncus pretium rutrum. Nulla facilisi. Nulla maximus sed magna non placerat. Ut in porttitor eros, et finibus odio. ',
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
                    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et porttitor velit, eu dapibus enim. Curabitur rhoncus pretium rutrum. Nulla facilisi. Nulla maximus sed magna non placerat. Ut in porttitor eros, et finibus odio. ',
                    price: 30,
                    qty: 0,
                    totalPrice: 0
                },
                {
                    id: 3,
                    name: 'Biscuit',
                    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et porttitor velit, eu dapibus enim. Curabitur rhoncus pretium rutrum. Nulla facilisi. Nulla maximus sed magna non placerat. Ut in porttitor eros, et finibus odio. ',
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
                    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et porttitor velit, eu dapibus enim. Curabitur rhoncus pretium rutrum. Nulla facilisi. Nulla maximus sed magna non placerat. Ut in porttitor eros, et finibus odio. ',
                    price: 120,
                    qty: 0,
                    totalPrice: 0
                },
                {
                    id: 11,
                    name: 'Shrimp Gambas',
                    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et porttitor velit, eu dapibus enim. Curabitur rhoncus pretium rutrum. Nulla facilisi. Nulla maximus sed magna non placerat. Ut in porttitor eros, et finibus odio. ',
                    price: 180,
                    qty: 0,
                    totalPrice: 0
                },
                {
                    id: 12,
                    name: 'Pork Belly',
                    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et porttitor velit, eu dapibus enim. Curabitur rhoncus pretium rutrum. Nulla facilisi. Nulla maximus sed magna non placerat. Ut in porttitor eros, et finibus odio. ',
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