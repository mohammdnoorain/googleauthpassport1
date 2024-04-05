const cookieSession = require("cookie-session");
const express = require("express");
const cors = require("cors");
const { passportSetup }= require("./utils/passport");
const passport = require("passport");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const app = express();
const session =require("express-session")
const bodyParser = require("body-parser");

// app.use(
//   cookieSession({ name: "session", keys: ["lama"], maxAge: 24 * 60 * 60 * 100 })
// );

mongoose
  .connect(
    "mongodb+srv://noorainmohammad908:sss798@cluster0.bhos1yh.mongodb.net/Post"
  )
  .then(() => {
    console.log("MongoDB is connected");
  });

  passportSetup(app);
app.use(
  session({
    secret: "1234876789",
    resave: false,
    saveUninitialized: true,
    // cookie: {
    //   // Other cookie options...
    //   sameSite: 'None', // Set SameSite attribute to None
    //   secure: true      // Make sure the cookie is only sent over HTTPS
    // }
  
  })
);
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());

app.use(
  cors({
    origin: "*",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

app.use("/auth", authRoute);


app.listen("5000", () => {
  console.log("Server is running!");
});