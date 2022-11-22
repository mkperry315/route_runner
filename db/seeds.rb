
user_1 = User.create(
    email: "test1@email.com",
    username: "stanTheMan",
    password: "password",
    zip: "01234"
)
user_2 = User.create(
    email: "etest2@email.com",
    username: "FastFeet",
    password: "password",
    zip: "01235"
)

track_1 = Track.find_or_create_by(
    name: "EBHS Track", 
    city: "E. Bridgewater", 
    zip: "02333", 
    image_url: "https://www.abacussports.com/wp-content/uploads/2021/06/Franklin-Marshall-Running-Track-min-1024x683.jpg",
    track_type: "Rubber",
    length: "quater mi",
    difficulty: "7/10",
    description: " Track has great gripping. They have seem to replace it recently. usally gets busy in the afternoons"
)

track_2 = Track.find_or_create_by(
    name: "SouthEastern Voc track", 
    city: "North Easton", 
    zip: "02169",
    image_url: "https://images.squarespace-cdn.com/content/v1/5a8af92a49fc2b8e07172e00/1521551843023-36OBILJXGJ684HJWO1M0/Bright+School.JPG?format=1000w",
    track_type: "Rubber and dirt",
    length: "quater mi",
    difficulty: "9/10",
    description: "They have to tracks one thats through the woods!"
)