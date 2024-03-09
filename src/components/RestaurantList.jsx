import React from "react";
import RestaurantCard from "./RestaurantCard";

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