import React from "react";
import ReviewTile from "./ReviewTile";
import NewReviewFormContainer from "./NewReviewFormContainer";

const ReviewsIndexContainer = (props) => {
    

    const reviewsList = props.reviews.map((review) => {
        
        return (
            <ReviewTile
                key={review.id}
                id={review.id}
                review={review}
            />
        )
    })

    return(
        <div>
            
            <NewReviewFormContainer
                errors={props.errors}
                postNewReview={props.postNewReview}
            />
            <br/>
            <div className="reviewCard">
            <br/>
            <h1 className="card2">Tracks Reviews </h1>
            <br/>
            {reviewsList}
            </div>
        </div>
    )
}

export default ReviewsIndexContainer