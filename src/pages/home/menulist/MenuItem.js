import React from 'react'
import { useDispatch } from 'react-redux';
import { getMenuItem } from '../../../actions/MenuListAction';

const MenuItem = ({ item }) => {
    const dispatch = useDispatch();
    return (
        <li>            
            <button className="btn btn-success" type="button" onClick={() => getMenuItem(dispatch, item.id)}>{item.name}</button>
        </li>
    )
}

export default MenuItem
