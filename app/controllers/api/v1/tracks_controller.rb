class Api::V1::TracksController < ApiController
    def index
        render json: Track.all
    end
end