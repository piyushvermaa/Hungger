import React, {useState, useEffect} from 'react'
import RestaurantList from './RestaurantList';
import restrauntLists from './data/RestaurantLists';
import '../components/styles/SearchBar.css';
import './styles/Body.css'
import { ShimmerCard } from './RestaurantList';
import nores from './nores';

const Body = () => {
    const [searchTxt, setSearchTxt] = useState('');
    const [searchClicked, setSearchClicked] = useState("false");
    const [restrauntListss, setRestrauntLists] = useState([]);

    const handlesearch=(searchTxt)=>{
        setRestrauntLists(restrauntLists.filter((restaurant)=>{
            return restaurant.placeName.toLowerCase().includes(searchTxt.toLowerCase());
        }));
    }

    const [flag, setflag]=useState(true);


    useEffect(()=>{
        fetchrestrauntList();
        setRestrauntLists(restrauntLists);
        setflag(false);
    },[]);

    async function fetchrestrauntList(){
        try{
            const response = await fetch('https://foodfire.onrender.com/api/restaurants?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING');
            const json = await response.json();
            // initialize checkJsonData() function to check Swiggy Restaurant data
            async function checkJsonData(jsonData) {
            for (let i = 0; i < jsonData?.data?.cards.length; i++) {
              // initialize checkData for Swiggy Restaurant data
              let checkData = json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
              // if checkData is not undefined then return it
            if (checkData !== undefined) {
            return checkData;
          }
        }
      }
        // call the checkJsonData() function which return Swiggy Restaurant data
        const resData = await checkJsonData(json);
        console.log(resData);

        }
        catch(err){
            console.log(err);
        }
    }

    if(flag) return <ShimmerCard/>

  return (
    <div className='wrapper'>
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
    <div className="restraunt-list">
          {restrauntListss.length == 0 && <nores />}
          <RestaurantList restaurants={restrauntListss} />
    </div>
    </div>
  )
}

export default Body
