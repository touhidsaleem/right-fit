import React from 'react'
import { useSelector } from 'react-redux';


const Cart = () => {

  const products = useSelector((state) => state.cartReducer.products);

  return (
    <div className="container my-5">
      <div className="row">
        {products && products.map((product, id) => (
          <div className="col-4" key={id}>
            <div className="product-image">
              <img src={product.image} alt="" />
            </div>
            <div className="description">
              <p className="product-title">Product Name: {product.name}</p>
              <p className="color">Color ID: {product.colorId}</p>
              <p className="material">Material ID: {product.materialId}</p>
              <p className="quantity">Product Quantity: {product.quantity}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Cart;