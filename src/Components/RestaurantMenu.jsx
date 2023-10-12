import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import ShimmerMenu from './ShimmerMenu'

const RestaurantMenu = () => {
let menu_url="https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId="
   
const [resInfo,setResInfo]=useState(null)

//     console.log(resInfo)


 const {resId}= useParams();
 //console.log(resId)
   
const url=menu_url+resId
//console.log(url)

    useEffect(()=>{
        const fetchData= async()=>{
            const response= await fetch(url)
            const data= await response.json()
            //console.log(data)
            setResInfo(data)
        }
        fetchData()
    },[])

  
if (resInfo===null) return <ShimmerMenu/>
const { name, cuisines, costForTwoMessage } =resInfo?.data.cards[0]?.card?.card?.info;  


const { itemCards } =
resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
  ?.card;

 console.log(itemCards)




  return (
    <div>
   
    <h1>{name}</h1> 
    <h3>{cuisines.join(",")}</h3>
    <h3>{costForTwoMessage}</h3>
<ul>
 {
    itemCards.map(each=> <li key={each.card.info.id}>
            {each.card.info.name}{" - "}{" Rs "}
            {each.card.info.price ? each.card.info.price / 100 : each.card.info.defaultPrice / 100}
          </li>)
 }
 </ul>
    </div>
    
  )
}

export default RestaurantMenu