import React from 'react'
import ProdImg from '../../../assests/prod.png';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import "./Product.scss";
function Product() {
  return (
    <Card style={{ width: '18rem' }} className='product-card'>
      <Card.Img variant="top" src={ProdImg} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
        <strong>&#8377;</strong><span><strong>1000</strong></span>
        </Card.Text>
        <Button variant="primary">Add To Cart</Button>
      </Card.Body>
    </Card>  
  )
}

export default Product;