class ReviewSerializer < ActiveModel::Serializer
    attributes :id, :question1, :question2, :question3, :description
  
    belongs_to :user
    belongs_to :track
  end