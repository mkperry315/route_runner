import React from "react"

const UserReviewTile = (props) => {
  const { review } = props

  return (
    <div>
      <div className="review-card" >
        <div >
         Track Review: {review.track.name}
        </div>
        <div>
        <p>How was the track Condition? {review.question1}</p> 
            <p>What time did you go? {review.question2}</p>
            <p>Was it busy?: {review.question3}</p>
            <p>Review: {review.description}</p> 
        </div>
      </div>
      <br/>
    </div>
  )
}

export default UserReviewTile