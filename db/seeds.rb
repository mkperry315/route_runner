
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
    city: "East Bridgewater", 
    zip: "02333", 
    image_url: "https://www.parecorp.com/wp-content/uploads/2021/12/EBridgewaterHS1.jpg",
    track_type: "rubber turf",
    length: "quater mile",
    difficulty: "7/10",
    description: " Track has great sun exposure. They have seemed to replace the track recently."
)

track_2 = Track.find_or_create_by(
    name: "SouthEastern Voc Track", 
    city: "North Easton", 
    zip: "02169",
    image_url: "https://images.squarespace-cdn.com/content/v1/5a8af92a49fc2b8e07172e00/1521551843023-36OBILJXGJ684HJWO1M0/Bright+School.JPG?format=1000w",
    track_type: "Rubber and dirt",
    length: "quater mi",
    difficulty: "9/10",
    description: "They have to tracks one thats through the woods!"
)
track_3 = Track.find_or_create_by(
    name: "Plymouth HS Track", 
    city: "Plymouth", 
    zip: "02494",
    image_url: "https://www.abacussports.com/wp-content/uploads/2021/06/Franklin-Marshall-Running-Track-min-1024x683.jpg",
    track_type: "Rubber and dirt",
    length: "quater mi",
    difficulty: "6/10",
    description: "Nice track!"
)
track_4 = Track.find_or_create_by(
    name: "Town of Hull Track", 
    city: "Hull", 
    zip: "05966",
    image_url: "https://images.squarespace-cdn.com/content/v1/5a8af92a49fc2b8e07172e00/1521551843023-36OBILJXGJ684HJWO1M0/Bright+School.JPG?format=1000w",
    track_type: "Rubber",
    length: "quater mi",
    difficulty: "9/10",
    description: "It's on the ocean!"
)
track_5 = Track.find_or_create_by(
    name: "Burge Pond Trail/track", 
    city: "Halifax", 
    zip: "34994",
    image_url: "https://www.abacussports.com/wp-content/uploads/2021/06/Franklin-Marshall-Running-Track-min-1024x683.jpg",
    track_type: "Dirt",
    length: "unknown",
    difficulty: "7.5/10",
    description: "its through old cranberry bogs!"
)
track_6 = Track.find_or_create_by(
    name: "West Bridgewater HS Track", 
    city: "West Bridgewater", 
    zip: "02555",
    image_url: "https://images.squarespace-cdn.com/content/v1/5a8af92a49fc2b8e07172e00/1521551843023-36OBILJXGJ684HJWO1M0/Bright+School.JPG?format=1000w",
    track_type: "Rubber",
    length: "quater mi",
    difficulty: "8/10",
    description: "Brand new! built in 2019"
)