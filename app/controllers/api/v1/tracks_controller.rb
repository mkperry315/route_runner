class Api::V1::TracksController < ApiController
    def index
        render json: Track.all
    end
    def show
        render json: Track.find(params[:id]), serializer: TrackShowSerializer, include: ['reviews.track']
    end
    
    def search
        tracks= Track.where("name ILIKE ? OR description ILIKE ?", "%#{params['search_string']}%", "%#{params['search_string']}%")
        render json: tracks
    end
end