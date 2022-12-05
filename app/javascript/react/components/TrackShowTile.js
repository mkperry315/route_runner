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
                <div className="card7">
                    <h4 className="center">Track Information</h4>
                    <h5>City: {track.city}</h5>
                    <h5>Area Code: {track.zip}</h5>
                    <h5>Track distance: Quarter Mile </h5>
                    <br/>
                    <h4 className="center">Description</h4>
                    <h6>{track.description}</h6>
                </div>
            <br/>
        <br/>
    </>
    )
}

export default TrackShowTile