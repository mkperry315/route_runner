class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.string :question1, null: false
      t.string :question2, null: false
      t.string :question3, null: false
      t.string :description

      t.belongs_to :track, null:false
      t.belongs_to :user, null: false

      t.timestamps null: false
    end
  end
end