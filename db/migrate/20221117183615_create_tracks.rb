class CreateTracks < ActiveRecord::Migration[5.2]
  def change
      create_table :tracks do |t|
        t.string :name, null: false
        t.string :city, null: false
        t.string :zip, null: false
        t.text :image_url, null: false
        t.string :track_type, null: false
        t.string :difficulty, null: false
        t.string :length, null: false
        t.text :description
  
        t.timestamps null: false
      end
    end
end
