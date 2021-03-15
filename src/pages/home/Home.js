import React from 'react'
import MenuList from './menulist/MenuList';
import MenuDetail from './menuDetail/MenuDetail';
import './Home.css';

const Home = () => {
    return (
        <main>
            <h1>Home Page</h1>
            <div className="flex-container">
                <div className="menu-list"><MenuList/></div>
                <div className="menu-detail"><MenuDetail/></div>                
            </div>
        </main>
    )
}

export default Home
