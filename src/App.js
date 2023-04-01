
import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Footer from './Components/Footer';
import NavbarComp from './Components/Navbar';
import Home from './Components/Home';
import Products from './Components/Products';
import Product from './Components/Product';
import { Provider } from 'react-redux';//!redux
import store from './redux/store';//!redux
import Cart from './Components/Cart';
import Checkout from './Components/Checkout';



function App() { 
  return (
    <>
    <BrowserRouter>
  <Provider store={store}>
  <NavbarComp/>

<Routes>
  <Route exact path='/' element={<Home/>}/>
  <Route  exact path='/products' element={<Products/>}/>
  <Route path='/products/:id' element={<Product/>}/> 
  <Route path='/cart' element={<Cart/>}/> 
  <Route path='/checkout' element={<Checkout/>}/> 
</Routes>
{/* <Footer/> */}
  </Provider>
    </BrowserRouter>
    
    </>
  );
}

export default App;
