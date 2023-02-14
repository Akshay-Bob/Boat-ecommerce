import React from 'react'
import ProdImg from '../../../assests/prod.png';
import "./Product.scss";
function Product() {
  return (
    <div className='product-card'>
      <div className='thumbnail'>
        <img src={ProdImg} alt=''/>
      </div>
        <div className='prod-details'>
          <span className='name'> Product Name </span>
          <span className='price'> &#8377; 1000 </span>
        </div>
    </div>
  )
}

export default Product;