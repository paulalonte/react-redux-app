import React from 'react'
import { useDispatch } from 'react-redux';
import { deleteOrder } from '../../actions/OrderAction';
import './Cart.css';

const CartItem = ({order}) => {
    const dispatch = useDispatch();
    return (
      <tr>
        <td>{order.name}</td>
        <td>{order.price}</td>
        <td>{order.qty}</td>
        <td>{order.totalPrice}</td>
        <td><button type="button" onClick={() => deleteOrder(dispatch, order.id)}>Remove</button> </td>
      </tr>
    )
}

export default CartItem
