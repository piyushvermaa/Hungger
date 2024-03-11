

import React from 'react';
import { useParams } from 'react-router-dom';
import restrauntLists from './data/RestaurantLists';
import ErrorComponent from './Error';
import './styles/RestaurantMenu.css'; // Import CSS file for RestaurantMenu styles

const RestaurantMenu = () => {
    const { id } = useParams();

    //if id is greater than the length of the restrauntLists then return null
    if (id > restrauntLists.length) {
        return <ErrorComponent />;
    }

    const menuItems = restrauntLists[id].menu; // Assuming menu is an array of menu items

    return (
        <div className="container">
            <div className="cover-image">
                <img src={restrauntLists[id].imageUrl} alt="" />
                <h1 className="restaurant-name">{restrauntLists[id].placeName}</h1>
            </div>
            <div className="restaurant-menu">
                <div className="restaurant-menu__header">
                    <h3 className="restaurant-menu__title">Menu</h3>
                    <h3 className="restaurant-menu__title">{restrauntLists[id].placeName}</h3>
                </div>
                <div className="restaurant-menu">
        
                  <div className="restaurant-menu__items">
                    <div className="restaurant-menu__item">
                      <div className="restaurant-menu__item-media">
                        <img src="https://image.ibb.co/mdLthk/150x150.jpg" alt="" />
                      </div>
                      <div className="restaurant-menu__item-info">
                        <h4 className="restaurant-menu__item-title">
                          <span className="restaurant-menu__item-name">STARTERS</span>
                          <span className="restaurant-menu__item-dots"></span>
                          <span className="restaurant-menu__item-price">$40</span>
                        </h4>
                        <p className="resaurant-menu__description">Chicken / Rosemary / Lemon</p>
                      </div>
                    </div>
                    <div className="restaurant-menu__item">
                      <div className="restaurant-menu__item-media">
                        <img src="https://image.ibb.co/mdLthk/150x150.jpg" alt="" />
                      </div>
                      <div className="restaurant-menu__item-info">
                        <h4 className="restaurant-menu__item-title">
                          <span className="restaurant-menu__item-name">STARTERS</span>
                          <span className="restaurant-menu__item-dots"></span>
                          <span className="restaurant-menu__item-price">$40</span>
                        </h4>
                        <p className="resaurant-menu__description">Chicken / Rosemary / Lemon</p>
                      </div>
                    </div>
                    <div className="restaurant-menu__item">
                      <div className="restaurant-menu__item-media">
                        <img src="https://image.ibb.co/mdLthk/150x150.jpg" alt="" />
                      </div>
                      <div className="restaurant-menu__item-info">
                        <h4 className="restaurant-menu__item-title">
                          <span className="restaurant-menu__item-name">STARTERS</span>
                          <span className="restaurant-menu__item-dots"></span>
                          <span className="restaurant-menu__item-price">$40</span>
                        </h4>
                        <p className="resaurant-menu__description">Chicken / Rosemary / Lemon</p>
                      </div>
                    </div>
                    <div className="restaurant-menu__item">
                      <div className="restaurant-menu__item-media">
                        <img src="https://image.ibb.co/mdLthk/150x150.jpg" alt="" />
                      </div>
                      <div className="restaurant-menu__item-info">
                        <h4 className="restaurant-menu__item-title">
                          <span className="restaurant-menu__item-name">STARTERS</span>
                          <span className="restaurant-menu__item-dots"></span>
                          <span className="restaurant-menu__item-price">$40</span>
                        </h4>
                        <p className="resaurant-menu__description">Chicken / Rosemary / Lemon</p>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    );
};

export default RestaurantMenu;
