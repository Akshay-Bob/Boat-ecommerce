import React from 'react';
import Product from './Product/Product';
import './Products.scss';

function Products() {
  return (
    <div className='products-container'>
        <div className='sec-heading'>Products</div>
        <div className='products'>
        <Product/>
        <Product/>
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