import {BrowserRouter,Routes,Route,Link} from 'react-router-dom';
import './App.css';
import CheckOut from './CheckOut';
import ProductDetail from './ProductDetail';
import ProductList from './ProductList';
import { CartContext } from './CartContext';
import { useState } from 'react';

function App() {

  const [cartItems,setCartItems] = useState([])

  return (
    
    <BrowserRouter>

        <CartContext.Provider value={{cartItems,setCartItems}}>

            <Link to="/checkout">購物車</Link>
            <Link to="/">首頁</Link>
            <Link to="/product">產品資料</Link>
            <Routes>
                <Route path = "/" element={<ProductList/>}></Route>
                <Route path = "/checkout" element={<CheckOut/>}></Route>
                <Route path = "/product" element={<ProductDetail/>}>
                  <Route path = ":id" element={<ProductDetail/>}></Route>
                </Route>
                <Route path = "*" element={<p>找不到頁面</p>}></Route>
            </Routes>

        </CartContext.Provider>

    </BrowserRouter>

  );
}

export default App;
