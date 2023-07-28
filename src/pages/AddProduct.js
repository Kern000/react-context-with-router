import React, { useContext, useState, useCallback } from 'react';
import ProductContext from '../ProductContext';
import {useNavigate} from 'react-router-dom';

export default function AddProduct(){
    const context=useContext(ProductContext);
    const [productName, setProductName] = useState("");
    const [cost, setCost] = useState(0);

    const navigate= useNavigate();

    const createNewProduct = useCallback(()=>{
        context.addProduct(productName, cost);
        console.log('rendered based on createNewProduct')
        navigate("/")
    },
    [productName, cost, context, navigate]
    )
    // when createNewProduct, navigate to base url

    return(
        <React.Fragment>
            <h1> New Product Constructor </h1>
            <div className="container">
                <label>Product Name: </label>
                <input  type="text"
                        className="form-control"
                        value={productName}
                        onChange={(e)=>setProductName(e.target.value)}
                />                                   
            </div>
            <div className="container">
                <label> Cost: </label>
                <input  type="number"
                        className="form-control"
                        value={cost}
                        onChange={(e)=>setCost(e.target.value)}
                />
            </div>
            <button className="btn btn-primary ms-2"
                    onClick={createNewProduct}
            > Create Product </button>
        </React.Fragment>
    )
}


//navigate when addProduct -> will go / which is ProductListing page
