class Api::V1::UsersController < ApiController
    def show
      render json: User.find(current_user.id), Serializer: UserSerializer, include: ['reviews.track']
    end
  end