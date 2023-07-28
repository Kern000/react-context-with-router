import React, {useContext} from 'react';
import ProductContext from '../ProductContext';
import {Link} from 'react-router-dom';

export default function ProductListing(){
    
    const context=useContext(ProductContext);

    return(
        <React.Fragment>
            <h1> Product Listing </h1>
            <ul className="list-group">
                {context.products().map(
                    p => 
                    <li key={p.id}
                        className="list-item-group"
                    >
                    {p.id} <br/>
                    {p.product_name}<br/>
                    {p.cost}
                    <Link   className="btn btn-primary btn-sm"
                            to={`/edit/${p.id}`}
                    > Edit Product
                    </Link> 
                    </li>
                )
                }
            </ul>
        </React.Fragment>
    )
}
