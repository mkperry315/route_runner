class TrackShowSerializer < ActiveModel::Serializer
    attributes :id, :name, :city, :zip, :image_url, :route_type, :difficulty, :length, :description
  
    has_many :reviews
  end