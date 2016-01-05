// /models/user.js

// The local object in the User schema is used when a user signs up or logs in locally.
// The twitter object is used when a user signs up or logs in via Twitter.
// What do you think we would do if we wanted to add authentication via Facebook or Github?

var User = mongoose.Schema({
  yahoo : {
    guid: String,
    email: String,
    profileImage: String,
    firstName: String,
    lastName: String,
    accessToken: String
  }
});
