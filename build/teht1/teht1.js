"use strict";
;
// TODO: Create a user object using the defined interface. Add all properties
const user1 = {
    username: "Katrin",
    email: "katrinpanicheva@hotmail.com",
    bio: "moii",
};
// TODO: Create another user object using the defined interface. Don't add bio
const user2 = {
    username: "Tanja",
    email: "tanja@hotmail.com",
};
// Function to display user information
function displayUserInfo(user) {
    // TODO: console log all properties of a user separately. Example: console.log(user.email)
    console.log(`Username: ${user.username}`);
    console.log(`Email: ${user.email}`);
    if (user.bio) {
        console.log(`Bio: ${user.bio}`);
    }
    else {
        console.log("Bio: Not provided");
    }
}
;
// Display user information
displayUserInfo(user1);
displayUserInfo(user2);
