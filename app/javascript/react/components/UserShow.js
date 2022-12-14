import React, { useEffect, useState } from "react"
import UserReviewTile from "./UserReviewTile"
import { Link } from "react-router-dom"


const UserShow = (props) => {

    const [user, setUser] = useState({reviews:[]})
    const getUser = async () => {
      try {
        const userId = props.match.params.userId
        const response = await fetch(`/api/v1/users/${userId}`)
        if (!response.ok) {
          const errorMessage = `${response.status} (${response.statusText})`
          const error = new Error(errorMessage)
          throw(error)
        }
        const fetchedUser = await response.json()
      setUser(fetchedUser, {reviews: [...fetchedUser.reviews]})
    } catch(err) {
      console.error(`Error in fetch: ${err.message}`)
    }
  }
    
    useEffect(() => {
      getUser()
    }, [])

    //  debugger
    let joinDate
    if (user.created_at) {
      const date = new Date(user.created_at)
      joinDate = date.toLocaleDateString()
    }

    const userReviews = user.reviews.map((review) => {
      return (
        <Link to={`/tracks/${review.track.id}`}>
          <UserReviewTile
            key={review.id}
            review={review}
          />
        </Link>
      )
    })

    return (
      <>
      <br/>
     <div className="card5">
        <h3>Welcome {user.username}!</h3>
        <img className="resizeProfile"src="https://img.freepik.com/free-photo/beautiful-young-female-athlete-practicing-white-studio-background-portrait-with-shadows-sportive-fit-model-motion-action_155003-21911.jpg?w=360" alt="logo" />
        <br/>
        <h4>Joined: {joinDate}</h4>
        <h4>Your Current Zip Code: {user.zip}</h4>
     </div>
     <br/>
     <div className="card5">
      <h3>Reviews:</h3>
        {userReviews}
     </div>
     <br/>
      <br/>
     <div className="card5">
      <h3>Favorite tracks:</h3>
      <br/>
      <Link to={`/tracks/1`}><div className="card5">EBHS Track</div></Link>
      <br/>
      <Link to={`/tracks/2`}><div className="card5">SouthEastern Voc Track</div></Link>
      <br/>
     </div>
     </>
        )
    }
    export default UserShow