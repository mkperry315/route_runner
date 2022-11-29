import React from "react";


const ReviewTile = (props) => {
    
    const { review } = props
    return (
        <div>
            <div className="card4">
                <p>Member Review -</p>
            <p>How was the track Condition? {review.question1}</p> 
            <p>What time did you go? {review.question2}</p>
            <p>Was it busy?: {review.question3}</p>
            <p>Review: {review.description}</p> 
            </div>
            <br/>
        </div>
    )
}

export default ReviewTile