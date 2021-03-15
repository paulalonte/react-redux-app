import React from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Header.css';
import { Navbar, Nav } from 'react-bootstrap';

const Header = () => {
    const { orders, totalQuantity } = useSelector(state => state.orderListReducer)
    return (
        <header>
            <Navbar bg="dark" expand="lg">
                <div className="container">
                    <Navbar.Brand className="logo"><Link to="/">Restaurant App</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Link to="/">Home</Link>
                            <Link to="/cart">Cart<span className="count-container">{totalQuantity}</span></Link>
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Navbar>
        </header>
    )
}

export default Header

