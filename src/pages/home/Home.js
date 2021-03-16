import React from 'react'
import MenuList from './menulist/MenuList';
import MenuDetail from './menuDetail/MenuDetail';
import './Home.css';

const Home = () => {
    return (
        <main>
            <div className="row">
                <div className="col-lg-3 col-md-4"><MenuList/></div>
                <div className="col-lg-9 col-md-8"><MenuDetail/></div>                
            </div>
        </main>
    )
}

export default Home
