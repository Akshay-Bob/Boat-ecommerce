import React from 'react';
import Product from './Product/Product';
import './Products.scss';

function Products( {innerPage} ) {
  return (
    <div className='products-container'>
        {!innerPage && <div className='sec-heading'>Popular Products</div>}
        <div className='products'>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>

        </div>
    </div>
  )
}

export default Products;