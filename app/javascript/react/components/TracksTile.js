import React from "react";
import { Link } from "react-router-dom";

const TracksTile = (props) => {
    const { track }  = props

    return (
            <div>
                <Link to={`/tracks/${track.id}`}>
                    <div>
                        <h2>
                            {track.name}
                        </h2>
                    </div>
                    <div>
                        <div>
                            <img className="resize"src={track.image_url} alt={`Image of ${track.name}.`}/>
                        </div>
                        <h4>
                            {track.city}
                        </h4>
                        <p>
                            {track.zip}
                        </p>
                    </div>
                </Link>
            </div>
    )
}

export default TracksTile