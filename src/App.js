import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Login from './pages/Login';
import ProductItem from './pages/ProductItem';
import ProductList from './pages/ProductList';
import Register from './pages/Register';
import Success from './pages/Success';
import PopularProduct from './pages/PopularProduct'
import ProductAll from './pages/ProductsAll/ProductsAll';
import Favorited from './pages/Favorited';

function App() {

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/products/:category">
          <ProductList />
        </Route>
        <Route path="/products-all">
          <ProductAll />
        </Route>
        <Route path="/product/:category/:id">
          <ProductItem />
        </Route>
        <Route path="/product/:id">
          <PopularProduct />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path='/favorite'>
          <Favorited/>
        </Route>
        <Route path="/success">
          <Success />
        </Route>
        <Route path="/register">
          <Register/>
      
          </Route>
        <Route path="/login">
          <Login/>
          </Route>
      </Switch>
    </Router>
  );
}

export default App;
