import React from "react";

const TrackShowTile = (props) => {
    const track = props.track
    
    return(
    <><br/>
        <div>
            <div className="card4">
                <h3>Track Name: {track.name}</h3>
                <h3>City: {track.city}</h3>
                <h4>Zip: {track.zip}</h4>
                <h4>Track distance: Quarter Mile per Lap </h4>
            </div>
            <br/>
            <p className="card4">Description: {track.description}</p>
            
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
    </>
    )
}

export default TrackShowTile