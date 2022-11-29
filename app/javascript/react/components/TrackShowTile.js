import React from "react";

const TrackShowTile = (props) => {
    const track = props.track
    
    return(
    <><br/>
                <div className="card2">
                    <h3>Track Name: {track.name}</h3> 
                </div>
                <br/>
                <img className="resizeShow"src={track.image_url} alt={`Image of ${track.name}.`}/>
                <br/>
                <br/>
                <div className="card6">
                    <h4>Track Information</h4>
                    <h5>City {track.city}</h5>
                    <h5>Area Code {track.zip}</h5>
                    <h5>Track distance Quarter Mile </h5>
                    <br/>
                    <h6>Description: {track.description}</h6>
                </div>
                
            
            <br/>
            <a href='/users/:id'>
            <button   className="centerButton">
            Favorite
            </button>
        </a>

        <br/>
        <br/>

        <a href='/'>
            <button className="centerButton1">
                Remove from Favorite
            </button>
        </a>
        <br/>
    </>
    )
}

export default TrackShowTile