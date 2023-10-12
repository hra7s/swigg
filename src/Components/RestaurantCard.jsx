
import { CDN_URL } from "../utils/constants"


const RestaurantCard=(props)=>{
    const {resData} =props
    
    const {cloudinaryImageId,name,avgRating,cuisines,costForTwo,sla}= resData?.info
    //optional chaining

  
        return (
            <div className='res-card' style={{backgroundColor : "#f0f0f0" }}>
            <img className="res-logo" alt="res-logo" src={CDN_URL+cloudinaryImageId}/>
            {/* <h3>{props.resName}</h3>
            <h4>{props.cuisine}</h4>
            <h4>4.4 Stars</h4>
            <h4>38 minutes</h4> */}
            {/* resData.data.Name */}
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h3>{avgRating}</h3>
            <h3>{costForTwo}</h3>
            <h4>{sla?.deliveryTime} minutes</h4>
            </div>
        )
   
}


export default RestaurantCard

