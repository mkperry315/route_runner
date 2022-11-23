import React from "react";

const TrackShowTile = (props) => {
    const track = props.track
    
    return(
        <><br/>
        <div className="card4">
            <div>
                <h3>Track Name:{track.name}</h3>
                <h3>City:{track.city}</h3>
                <h4>Zip:{track.zip}</h4>
                <h4>Track distance: </h4>
                <ul>
            
                </ul>
                <p>Description: {track.description}</p>
            </div>
            <div>
                <img src={track.image_url} alt={`image of ${track.name}`} />
            </div>
            <a href='/users/:id'>
        <button class="button" className="button">
            Favorite
        </button>
    </a>
        </div>
        <div className="card4">
           <h2> "create a live chat form if time"</h2>
        </div>
        <a href='/'>
        <button class="button" className="button">
            Remove from Favorite
        </button>
    </a>
        </>
    )
}

export default TrackShowTile