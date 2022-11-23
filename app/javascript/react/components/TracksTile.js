import React from "react";
import { Link } from "react-router-dom";

const TracksTile = (props) => {
    const { track }  = props

    return (<>
            <div className="card4">
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
                            City: {track.city}
                        </h4>
                        <p>
                           Zip Code: {track.zip}
                        </p>
                    </div>
                </Link>
            </div>
            <br/>
            </>
    )
}

export default TracksTile