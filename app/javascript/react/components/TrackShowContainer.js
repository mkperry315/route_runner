import React, { useEffect, useState } from "react"
import ReviewsIndexContainer from "./ReviewsIndexContainer"
import TrackShowTile from "./TrackShowTile"
import GoogleMap from "./GoogleMaps"

const TrackShowContainer = (props) => {
    const [track, setTrack] = useState({
        reviews: []
    })
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
    const postNewReview = async (formPayload) => {
        try {
            const trackId = props.match.params.trackId
            const response = await fetch(`/api/v1/tracks/${trackId}/reviews`, {
                method: 'POST',
                credentials: 'same-origin',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(formPayload)
            })
            if(!response.ok) {
                const errorMessage = `${response.status} (${response.statusText})`
                const error = new Error(errorMessage)
                throw(error)
            }
            const postedReview = await response.json()
            if (postedReview.review) {
                setTrack({
                    ...track,
                    reviews: [...track.reviews, postedReview.review]
                })
                return true
            } else {
                setErrors(postedReview.errors)
                return false
            }
        } catch(err) {
            console.error(`Error in fetch: ${err.message}`)
        }
    }

    useEffect(() => {
        getTrack()
    }, [])
    
    return ( 
        <>
        <br/>
        <div className="showCard">

        <div className="show-page">
            <TrackShowTile
                key={track.id}
                id ={track.id}
                track={track}
            />
             
            <GoogleMap/>
            <br/>
            <ReviewsIndexContainer
                errors={errors}
                reviews={track.reviews}
                postNewReview={postNewReview}
            />
        </div>
        <br/>
        </div>
        </>
    )
}

export default TrackShowContainer