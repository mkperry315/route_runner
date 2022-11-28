class Review < ApplicationRecord
    validates :question1, presence: true
    validates :question2, presence: true
    validates :question3, presence: true
    validates :description, presence: true

    belongs_to :track
    belongs_to :user
end