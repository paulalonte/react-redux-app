import React from 'react'
import { useSelector } from 'react-redux';
import CartItem from './CartItem';

const Cart = () => {
    const { orders, totalPrice, totalQuantity } = useSelector(state => state.orderListReducer)
    return (
        <div className="cart">
            <h1>Cart Details</h1>
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
                </tbody>
            </table>
            <h3>Total Quantity {totalQuantity}</h3>
            <h2>Total Price {totalPrice}</h2>
        </div>
    )
}

export default Cart
