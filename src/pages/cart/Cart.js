import React from 'react'
import { useSelector } from 'react-redux';
import CartItem from './CartItem';
import { currencyFormatter } from '../../utils/currencyFormatter';

const Cart = () => {
    const { orders, totalPrice, totalQuantity } = useSelector(state => state.orderListReducer)
    return (
        <div className="cart">
            <h1 className="page-title">Cart Details</h1>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map(order => <CartItem key={order.id} order={order}/>)}
                    <tr>
                        <td></td>
                        <td></td>
                        <td><h2>{totalQuantity}</h2></td>
                        <td><h2>{currencyFormatter(totalPrice)}</h2></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Cart
