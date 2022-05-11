import {BrowserRouter,Routes,Route,Link} from 'react-router-dom';
import './index.css';
import CheckOut from './CheckOut';
import ProductDetail from './ProductDetail';
import ProductList from './ProductList';
import { CartContext } from './CartContext';
import { useState } from 'react';
import { CartTotalContext } from './CartTotalContext';


function App() {

  const [cartItems,setCartItems] = useState([])
  const [totalPriceInCart,setTotalPriceInCart] = useState(0)

  return (
    
    <BrowserRouter>

        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-wEmeIV1mKuiNpC+IOBjI7aAzPcEZeedi5yW5f2yOq55WWLwNGmvvx4Um1vskeMj0" crossorigin="anonymous"></link>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-p34f1UUtsS3wqzfto5wAAmdvj+osOnFyQFpp4Ua3gs/ZVWx6oOypYoCJhGGScy+8" crossorigin="anonymous"></script>

        <CartContext.Provider value={{cartItems,setCartItems}}>
        <CartTotalContext.Provider value={{totalPriceInCart,setTotalPriceInCart}}>
            
            <h1>
                <Link to="/"  className='link-text title-format' >KAREN's SHOP</Link>
            </h1>
            
            <nav class="flex-nav">
            
                <Link to="/">首頁</Link>
                <Link to="/checkout">購物車</Link>
          
            </nav>

            <Routes>
                <Route path = "/" element={<ProductList/>}></Route>
                <Route path = "/checkout" element={<CheckOut/>}></Route>
                <Route path = "/product" element={<ProductDetail/>}>
                  <Route path = ":id" element={<ProductDetail/>}></Route>
                </Route>
                <Route path = "*" element={<p>找不到頁面</p>}></Route>
            </Routes>
        </CartTotalContext.Provider>
        </CartContext.Provider>

    </BrowserRouter>

  );
}

export default App;
