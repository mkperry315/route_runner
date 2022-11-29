import React from "react"
import { Loader } from "@googlemaps/js-api-loader"
const GoogleMap = (props) => {
  const loader = new Loader({
    apiKey: "AIzaSyBsLEHrsVHvjAvvzG095Rdlo3zHPeNQ1gE",
    version: "weekly",
  });
  
  // .then/.catch == async/await
  loader.load().then(() => {
    // with the users zip code, use `geocoder` feed the zipcode to geocoder which will return coordinates
    const boston = { lat: 42.0270805, lng: -70.9573828 };
    
    const map = new google.maps.Map(document.getElementById("map"), {
      center: boston,
      zoom: 15,
    });
    new google.maps.Marker({
      position: boston,
      map: map,
    });
  });
  return (
    <div className="card4" id="map" style={{height:300, width:500}}></div>
   
  )
}
export default GoogleMap