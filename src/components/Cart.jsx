import React from 'react'

const Cart = () => {
  return (
    <div className="food-card">
      <img
        src="https://via.placeholder.com/300"
        alt="Placeholder"
        className="food-card-image"
      />
      <div className="food-card-details">
        <h2 className="food-card-name">Pizza</h2>
        <p className="food-card-description">
          Delicious pepperoni pizza with melted cheese.
        </p>
        <p className="food-card-price">$10.99</p>
      </div>
    </div>
  )
}

export default Cart
