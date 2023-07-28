import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, Link } from 'react-router-dom'; //BrowserRouter at index.js
import ProductDetails from  './ProductDetails';
import AddProduct from      './pages/AddProduct';
import ProductListing from  './pages/ProductListing';
import EditProduct from     "./pages/EditProduct";

export default function App(){
  return(
    <React.Fragment>
      <div className="container">
        <nav className="navbar navbar-expand-md bg-primary">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/"> Products Listing </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/add"> Add Product </Link>
            </li>
          </ul>
        </nav>
        <ProductDetails>
          <Routes>
            <Route path="/" element={<ProductListing />}/>
            <Route path="/add" element={<AddProduct />}/>
            <Route path="/edit/:productId" element={<EditProduct />}/>
          </Routes>
        </ProductDetails>
      </div>
    </React.Fragment>    
  )
}

// wrapping the indiv route in <productDetails> allow it to render the child components based on props.children
// whatever is between the 'open' and 'close' <ProductDetails> is passed in
// edit Link is under the AddProduct which includes the edit button which Link to EditProduct via /edit/:productId route defined here
// useMemo for computed values (like search)
// useCallbacks - for functions that are event handlers

