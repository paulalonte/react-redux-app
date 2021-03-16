import React from 'react'
import { useDispatch } from 'react-redux';
import { deleteOrder } from '../../actions/OrderAction';
import './Cart.css';
import { incrementQuantity, decrementQuantity } from '../../actions/OrderAction';
import { currencyFormatter } from '../../utils/currencyFormatter';

const CartItem = ({order}) => {
    const dispatch = useDispatch();
    return (
      <tr className="cart-order-row">
        <td>{order.name}</td>
        <td>{currencyFormatter(order.price)}</td>
        <td>
          <button className="btn" type="button" onClick={() => decrementQuantity(dispatch, order.id)}>-</button>
            <span>{order.qty}</span>
          <button className="btn" type="button" onClick={() => incrementQuantity(dispatch, order.id)}>+</button>
        </td>
        <td>{currencyFormatter(order.totalPrice)}</td>
        <td><button className="btn btn-danger" type="button" onClick={() => deleteOrder(dispatch, order.id)}>Remove</button> </td>
      </tr>
    )
}

export default CartItem
