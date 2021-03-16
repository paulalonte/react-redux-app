import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './MenuDetail.css'
import { useDispatch, useSelector } from 'react-redux';
import { addOrder, incrementQuantity, decrementQuantity } from '../../../actions/OrderAction';

const MenuDetail = () => {
    const { productSelected } = useSelector(state => state.menuListReducer);
    const { orderSelected, orders } = useSelector(state => state.orderListReducer)
    const dispatch = useDispatch();
    const [quantityItem, setQuantity] = useState(0);

    const [hasProductSelected, setProductHasSelected] = useState(false);

    useEffect(() => {
        setQuantity(orderSelected.qty);
    },[orderSelected])

    useEffect(() => {
        if(Object.keys(productSelected).length !== 0) {
            setProductHasSelected(true);
        }
        let selected;
        if(orders.length) {
            selected = orders.find(order => order.id === productSelected.id);
            if(selected) {
                setQuantity(selected.qty)
            }else {
                setQuantity(productSelected.qty);
            }
        }else {
            setQuantity(productSelected.qty);
        }
    },[productSelected])

    return (
        <div className="detail">
            {(hasProductSelected) ? 
            <section>
                <h1>{productSelected.name}</h1>
                <button className="btn" type="button" disabled={quantityItem <= 0} onClick={() => decrementQuantity(dispatch, productSelected.id)}>-</button>
                <span>{quantityItem}</span>
                <button className="btn" type="button" disabled={quantityItem < 1} onClick={() => incrementQuantity(dispatch, productSelected.id)}>+</button>
                <button className="btn btn-warning" type="button" disabled={quantityItem >= 1} onClick={() => addOrder(dispatch, productSelected)}>Add Item</button>             
                <hr></hr>
                <p>{productSelected.desc}</p>
                <div>
                    <Link to="/cart" className="btn btn-warning">View Cart</Link>
                </div>
            </section>
            : <h2>Please select a menu</h2>}
        </div>
    )
}

export default MenuDetail
