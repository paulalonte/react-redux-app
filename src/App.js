import Header from './components/header/Header';
import Home from './pages/home/Home';
import Cart from './pages/cart/Cart';
import Admin from './pages/admin/Admin';
import { Route, Switch } from 'react-router-dom';
import './App.css';

function App() {  

  return (
    <>
      <Header />
      <div className="container">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/admin" component={Admin} />
          <Route path="/cart" component={Cart} />
        </Switch>
      </div>
      
    </>
  );
}

export default App;
