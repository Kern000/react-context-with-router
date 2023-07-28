import React, {useContext, useEffect, useState} from "react";
import ProductContext from "../ProductContext";
import {useParams, useNavigate} from "react-router-dom";

export default function EditProduct(){

    const context=useContext(ProductContext);
    const params=useParams();  //using url path id
    const navigate = useNavigate();

    let productId = params.productId;
    let foundProductIndex = context.retrieveProductById(parseInt(productId));

    useEffect(()=> {
        productId= params.productId;
        foundProductIndex = context.retrieveProductById(parseInt(productId));
    },
    [foundProductIndex, params.productId, context]
    )

    const [newProductName, setNewProductName] = useState('');
    const [newCost, setNewCost] = useState(0);

    function EditOneProduct(foundProductIndex){

        let array=context.products()
        let cloned=array.slice();

        let left=cloned.slice(0, foundProductIndex);
        let right=cloned.slice(foundProductIndex+1);
        context.setProducts([...left,
            {
                id: productId,
                product_name: newProductName,
                cost: newCost
            },...right]
        )
        navigate("/"); 
    }

// didn't work when trying to set NewItem with the full object then use context.setProducts()
// It is likely because of the asynchonous nature of setProducts etc.

    return(
        <React.Fragment>
            <h1> Edit Said Product </h1>
            <div>
                <label>Enter New Product Name</label>
                <input  type="text"
                        className="form-control"
                        value={newProductName}
                        onChange={(e)=> setNewProductName(e.target.value)}
                />
            </div>
            <div>
            <label>Enter New Product Cost</label>
                <input  type="number"
                        className="form-control"
                        value={newCost}
                        onChange={(e)=> setNewCost(e.target.value)}
                />
            </div>
            <button className="btn btn-danger"
                    onClick={()=>EditOneProduct(foundProductIndex)}
            >
                Confirm
            </button>
        </React.Fragment>
    )
}



