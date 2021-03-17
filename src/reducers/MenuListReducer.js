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
                    desc: 'Cake Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et porttitor velit, eu dapibus enim. Curabitur rhoncus pretium rutrum. Nulla facilisi. Nulla maximus sed magna non placerat. Ut in porttitor eros, et finibus odio. ',
                    price: 30,
                    qty: 0,
                    totalPrice: 0,
                    image: 'https://media.istockphoto.com/photos/healthy-homemade-carrot-cake-picture-id466724890?k=6&m=466724890&s=612x612&w=0&h=FSbEkebA-FPoQqJJt_GHKxErxsF_Hx23cyRl5QKrlhI='
                },
                {
                    id: 1,
                    name: 'Ice cream',
                    desc: 'Ice cream Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et porttitor velit, eu dapibus enim. Curabitur rhoncus pretium rutrum. Nulla facilisi. Nulla maximus sed magna non placerat. Ut in porttitor eros, et finibus odio. ',
                    price: 30,
                    qty: 0,
                    totalPrice: 0,
                    image: 'https://expertphotography.com/wp-content/uploads/2020/06/ice-cream-photography9.jpg'
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
                    desc: 'Soup Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et porttitor velit, eu dapibus enim. Curabitur rhoncus pretium rutrum. Nulla facilisi. Nulla maximus sed magna non placerat. Ut in porttitor eros, et finibus odio. ',
                    price: 30,
                    qty: 0,
                    totalPrice: 0,
                    image: 'https://www.biscuitsandburlap.com/wp-content/uploads/2018/09/she-crab-soup-3.jpg'
                },
                {
                    id: 3,
                    name: 'Salad',
                    desc: 'Salad Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et porttitor velit, eu dapibus enim. Curabitur rhoncus pretium rutrum. Nulla facilisi. Nulla maximus sed magna non placerat. Ut in porttitor eros, et finibus odio. ',
                    price: 30,
                    qty: 0,
                    totalPrice: 0,
                    image: 'https://eskipaper.com/images/garden-salad-1.jpg'
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
                    desc: 'Beef Steak Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et porttitor velit, eu dapibus enim. Curabitur rhoncus pretium rutrum. Nulla facilisi. Nulla maximus sed magna non placerat. Ut in porttitor eros, et finibus odio. ',
                    price: 120,
                    qty: 0,
                    totalPrice: 0,
                    image: 'https://media.istockphoto.com/photos/grilled-beef-steaks-picture-id882548344?k=6&m=882548344&s=612x612&w=0&h=bQ5ZlptD7rKZdjrvr7adBHXYVVS9p0iISvm1MTshXRU='
                },
                {
                    id: 11,
                    name: 'Shrimp Gambas',
                    desc: 'Shrimp Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et porttitor velit, eu dapibus enim. Curabitur rhoncus pretium rutrum. Nulla facilisi. Nulla maximus sed magna non placerat. Ut in porttitor eros, et finibus odio. ',
                    price: 180,
                    qty: 0,
                    totalPrice: 0,
                    image: 'https://img.sndimg.com/food/image/upload/w_555,h_416,c_fit,fl_progressive,q_95/v1/img/recipes/12/70/29/uoTJVprzStylivGnLAjn_pr.jpg'
                },
                {
                    id: 12,
                    name: 'Pork Belly',
                    desc: 'Pork Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et porttitor velit, eu dapibus enim. Curabitur rhoncus pretium rutrum. Nulla facilisi. Nulla maximus sed magna non placerat. Ut in porttitor eros, et finibus odio. ',
                    price: 100,
                    qty: 0,
                    totalPrice: 0,
                    image: 'https://img.lovepik.com/photo/50068/9055.jpg_wh860.jpg'
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
        case ActionTypes.ADD_MENU_LIST:
            return addNewListItem(state, action);
        default:
            return state;
    }
}

const addNewListItem = (oldState, action) => {
    const state = {...oldState};
    const itemObj = action.payload.item;
    const newItem = { 
        id: Date.now(),
        name: itemObj.name,
        desc: itemObj.desc,
        price: itemObj.price,
        qty: 0,
        totalPrice: 0,
        image: itemObj.image
    }

    for(let category of state.products) {
        if(+category.categoryId === +itemObj.categoryId) {            
            category.items = [...category.items, newItem];
        }
    }

    return state;
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