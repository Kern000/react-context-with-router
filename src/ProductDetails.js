import React, {useState, useMemo} from 'react';
import ProductContext from './ProductContext';

export default function ProductDetails(props){

    const [products, setProducts] = useState([
        {
            id: 1,
            product_name: "ACME Anvils",
            cost: 99.99
          },
          {
            id: 2,
            product_name: "ACME Screwdriver",
            cost: 25.00
          },
          {
            id: 3,
            product_name: "ACME Nails",
            cost: 3.0
          }
    ])

    // const addProduct = useMemo((newProductName, cost) => {

    //     let id = Math.round(Math.random()*10000);
    //     const clone=[...products,
    //                  {
    //                     id:id,
    //                     product_name:newProductName,
    //                     cost:cost
    //                  }
    //                 ];
    //     setProducts(clone);
    //     },
    //     [products]
    // )

    const context= useMemo(()=> {
        return (
            {
                products: () => {
                    return products;
                },
                setProducts: (newProductsList) => {
                    setProducts(newProductsList)
                },
                addProduct: (productName, cost)=> {
                    setProducts(
                        [...products,
                         {
                            id: Math.round(Math.random() * 9999),
                            product_name: productName,
                            cost: cost
                         }
                        ]
                    )
                },
                retrieveProductById: (productId) => {
                    return products.findIndex(p => p.id === productId)
                }
            }
        )
    }, 
    [products]);

    return(
        <ProductContext.Provider value={context}>
            {props.children}
        </ProductContext.Provider>
    )
}

// props.children renders the children components passed to Parent component
// Having 2 useMemo addProduct clashed and led to infinite rerender loop

