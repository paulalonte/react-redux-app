import React, { useEffect } from 'react'
import './MenuList.css';
import { useDispatch, useSelector } from 'react-redux';
import { getMenuList } from '../../../actions/MenuListAction';
import MenuItem from './MenuItem';

const MenuList = () => {
    const dispatch = useDispatch();
    const { products } = useSelector(state => state.menuListReducer);

    useEffect(() => {
        getMenuList(dispatch);
    }, [dispatch])

    return (
        <div className="list">         
            <ul className="menu-container">
                { products.map(item => 
                    <li key={item.categoryId}>
                        <h3>{item.category}</h3>
                        <ul>
                            {item.items.map(item => <MenuItem key={item.id} item={item}/> )}
                        </ul>
                    </li>                    
                )}
            </ul>
        </div>
    )
}

export default MenuList
