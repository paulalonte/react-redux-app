import Header from './components/header/Header';
import Home from './pages/home/Home';
import Cart from './pages/cart/Cart';
import { Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/cart" component={Cart} />
        </Switch>
      </div>
      
    </>
  );
}

export default App;
