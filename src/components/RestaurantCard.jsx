import React from "react";

const RestaurantCard = ({ restaurant }) => {
    return (
      <div className="card" key={restaurant.id}>
        <div className="card-media">
          <img className="card-img" src={restaurant.imageUrl} alt={restaurant.placeName} />
          <div className="discount">{restaurant.discount}<p>Up to &#x20b9;{restaurant.maxDiscount}</p></div>
          <div className="pro-discount">{restaurant.proDiscount}</div>
          <div className="delivery-time">{restaurant.deliveryTime}</div>
          <div className="bookmark"></div>
        </div>
        <div className="card-description">
          <div className="about-place">
            <div className="place">
              <p className="place-name">{restaurant.placeName}</p>
              <p className="place-speciality">{restaurant.speciality}</p>
            </div>
            <div className="place-review">
              <p className="rating">{restaurant.rating}&#x2605;</p>
              <p className="per-person">&#x20b9;{restaurant.pricePerPerson}</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

export default RestaurantCard;