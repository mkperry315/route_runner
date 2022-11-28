class Api::V1::ReviewsController < ApiController
    def create
        review = Review.new(review_params)
        track = Track.find(params[:track_id])
        review.track = track
        review.user = current_user
        
        if review.save
            render json: review
        else
            render json: { errors: review.errors.full_messages.to_sentence }
        end
    end

    private
    def review_params
        params.require(:review).permit(:question1, :question2,:question3, :description)
    end
end