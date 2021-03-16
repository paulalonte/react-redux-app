import React, { useState, useEffect } from 'react'
import { addMenuList } from '../../actions/MenuListAction';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import './Admin.css';

const Admin = () => {
    const formInitState = { name: '', desc: '', price: '', image: '', categoryId: 0}
    const [formObj, setFormObjValue] = useState(formInitState);
    const dispatch = useDispatch();
    const [isSuccessful, setSuccessful] = useState(false)

    const { products } = useSelector(state => state.menuListReducer);

    const handleSubmit = (e) => {
        e.preventDefault();
        addMenuList(dispatch, formObj);
        setSuccessful(true);
    }

    useEffect(() => {
        
    }, [products])

    return (
        <>
            <h1 className="page-title">Admin Page</h1>
            <p>Page for adding a new Menu item</p>

            <form onSubmit={handleSubmit}>
                <div className="form-group">    
                    <select className="form-control" onChange={(e) => setFormObjValue({...formObj, categoryId: e.target.value})}>
                        <option disabled defaultValue>Select Category</option>
                        <option value="0">Dessert</option>
                        <option value="1">Appetizer</option>
                        <option value="2">Main Course</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="name">Menu Name</label>
                    <input type="text" className="form-control" id="name" placeholder="Salad" required onChange={(e) => setFormObjValue({...formObj, name: e.target.value})}/>
                </div>
                <div className="form-group">
                    <label htmlFor="desc">Menu Description</label>
                    <input type="text" className="form-control" id="desc" placeholder="Enter Description" required onChange={(e) => setFormObjValue({...formObj,desc: e.target.value})}/>
                </div>
                <div className="form-group">
                    <label htmlFor="price">Menu Price</label>
                    <input type="number" className="form-control" id="price" placeholder="Enter Price" required onChange={(e) => setFormObjValue({...formObj,price: e.target.value})}/>
                </div>
                <div className="form-group">
                    <label htmlFor="image">Menu Image URL</label>
                    <input type="text" className="form-control" id="image" placeholder="Enter Image URL" required onChange={(e) => setFormObjValue({...formObj,image: e.target.value})}/>
                </div>
                <button type="submit" className="btn btn-success">Submit</button>
            </form>
            {isSuccessful? <h4>Successfully saved an item. <Link to="/">View new item</Link></h4> : null}
        </>
    )
}

export default Admin
