class Api::V1::TracksController < ApiController
    def index
        render json: Track.all
    end
    def show
        render json: Track.find(params[:id]), serializer: TrackShowSerializer
    end
end