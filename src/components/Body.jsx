import React, {useState} from 'react'
import RestaurantList from './RestaurantList';
import restrauntLists from './data/RestaurantLists';
import SearchBar from './SearchBar';
import '../components/styles/SearchBar.css';
import './styles/Body.css'

const Body = () => {
    const [searchTxt, setSearchTxt] = useState('');
    const [searchClicked, setSearchClicked] = useState("false");
    const [restrauntListss, setRestrauntLists] = useState(restrauntLists);

    const handlesearch=(searchTxt)=>{
        setRestrauntLists(restrauntLists.filter((restaurant)=>{
            return restaurant.placeName.toLowerCase().includes(searchTxt.toLowerCase());
        }));
    }
  return (
    <div className='wrapper'>
    <SearchBar/>
    <div className='search-bar'>
        <input type="text"
         placeholder="Search for Restaurants" 
         value={searchTxt}
         onChange={(e)=>{
             setSearchTxt(e.target.value);
             handlesearch(e.target.value);
         }}
         className='search-txt'
         />
        <button className='search-btn' 
        onClick={()=>{
            //need to filter the data
            handlesearch(searchTxt);
            setSearchClicked(searchClicked === "false" ? "true" : "false");
        }} >Search</button>
    </div>

    <h2>{searchClicked}</h2>
    <div className="restraunt-list">
          <RestaurantList restaurants={restrauntListss}/>
    </div>
    </div>
  )
}

export default Body
