import React, { useEffect, useState } from "react"
import TrackShowTile from "./TrackShowTile"

const TrackShowContainer = (props) => {
    const [track, setTrack] = useState({})
    const [errors, setErrors] = useState("")

    const getTrack = async () => {
        try {
            const trackId = props.match.params.trackId
            const response = await fetch(`/api/v1/tracks/${trackId}`)
            if (!response.ok) {
                const errorMessage = `${response.status} (${response.statusText})`
                const error = new Error(errorMessage)
                throw(error)
            }
            const fetchedTrack = await response.json()
            setTrack(fetchedTrack)
        } catch(err) {
            console.error(`Error in fetch: ${err.message}`)
        }
    }

    useEffect(() => {
        getTrack()
    }, [])
    
    return ( 
        <div className="show-page">
            <TrackShowTile
                key={track.id}
                id ={track.id}
                track={track}
            />
        </div>
    )
}

export default TrackShowContainer