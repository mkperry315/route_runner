class Api::V1::TracksController < ApiController
    def index
        render json: Track.all
    end
    def show
        render json: Track.find(params[:id]), serializer: TrackShowSerializer, include: ['reviews.track']
    end
    def destroy
        Review.where(track_id: params[:id]).destroy_all
        render json: {
            deletedMessage: "Reviews have been deleted",
            tracks: Track.all
        }
    end
end