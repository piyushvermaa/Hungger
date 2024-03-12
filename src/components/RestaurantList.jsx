import React from "react";
import RestaurantCard from "./RestaurantCard";

export const ShimmerCard = () => {
  return (
    <div className="shimmer-card">
      <div className="shimmer-card-media"></div>
      <div className="shimmer-card-description">
        <div className="shimmer-about-place">
          <div className="shimmer-place">
            <div className="shimmer-placeholder shimmer-place-name"></div>
            <div className="shimmer-placeholder shimmer-place-speciality"></div>
          </div>
          <div className="shimmer-place-review">
            <div className="shimmer-placeholder shimmer-rating"></div>
            <div className="shimmer-placeholder shimmer-per-person"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

const RestaurantList = ({ restaurants }) => {

    return (
      <div className="cards-container">
        {restaurants.map(restaurant => (
          <RestaurantCard restaurant={restaurant} key={restaurant.id} />
        ))}
      </div>
    );
};
  
export default RestaurantList;