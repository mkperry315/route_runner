import React, { useState, useEffect } from "react"
import SearchBar from './SearchBar'
import TracksTile from './TracksTile'



const TracksIndexContainer = (props) => {
    const [tracks, setTracks] = useState([])
    

    const getTracks = async() => {
        try{
            const response = await fetch("api/v1/tracks")
            if (!response.ok) {
                const errorMessage = `${response.status} (${response.statusText})`
                const error = new Error(errorMessage)
                throw(error)
            }
            const fetchedTracks = await response.json()
            setTracks(fetchedTracks)
        } catch(err) {
            console.error(`Error in fetch: ${err.message}`)
        }
    }

    useEffect(() => {
        getTracks()
      }, [])

    const tracksList = tracks.map((track) => {
        return (
            <TracksTile 
                key={track.id}
                track={track}
            />
        )
    })

    return (
     <div className="trackIndex">
         <br/>
         <div className="search-bar">
                <SearchBar 
                    setTracks={setTracks}
                />
            </div>
        <br/>
    <div className="indexCard">
        <br/>
      <h1 className="card2">Local Tracks</h1>
        <br/>
      {tracksList}
     </div> 
    </div>
    
    )
}

export default TracksIndexContainer