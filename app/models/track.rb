class Track < ApplicationRecord
    validates :name, presence: true
    validates :city, presence: true
    validates :zip, presence: true
    validates :image_url, presence: true
    validates :track_type, presence: true
    validates :difficulty, presence: true
    validates :length, presence: true
    
    has_many :reviews
end