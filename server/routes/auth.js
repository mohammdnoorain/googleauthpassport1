const router = require("express").Router();
const passport = require("passport");
const User = require("../modals/userModal");
require("dotenv").config();

const CLIENT_URL = "http://localhost:5174/";
const CLIENT_URL_HOME = "http://localhost:5174/admin";
CLIENT_URL_LOGOUT = "http://localhost:5174/logout";
//  const CLIENT_URL_POST="http://localhost:3000/post";

router.get("/login/success", async (req, res) => {
  console.log("hello", req.user);

  console.log("noorain ji", req.session.passport);
  const userdata = req.session.passport;

  if (userdata) {
    /// yha pr condition lga skte agr userdata hua databse me then
    return res.send({
      success: true,
      message: "successfull",
      user: userdata,
    });
  } else {
    console.log("userdata", userdata);
    return res.json({
      success: false,
      message: "unsuccesiiiiiis",
    });
  }
});
router.post("/loginwithcredential", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });
    console.log("ooooo", user);
    if (user.password === password) {
      req.session.logindata = user;
      return res.send({
        success: true,
        message: "login success",
      });
    } else {
      console.log("wrong credentials");
    }
  } catch (error) {
    console.log(error);
  }
});

router.get("/login/failed", (req, res) => {
  res.status(401).json({
    success: false,
    message: "failure",
  });
});

router.get("/logout", (req, res) => {
  req.logout(() => {
    req.user = {};

    req.session.destroy((err) => {
      if (err) {
        console.error("Error destroying session:", err);
        return res.status(500).send("Error logging out");
      }
      // Redirect to the logout URL after session destruction
      console.log("outttt", req.session);
      console.log("outttt55555", req.user);
      res.redirect(CLIENT_URL_LOGOUT);
    });

    // res.redirect(CLIENT_URL_LOGOUT);
  });
});

router.get("/google", passport.authenticate("google", { scope: ["profile"] }));

router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: CLIENT_URL_HOME,
    failureRedirect: "/login/failed",
  })
);

// router.get("/github", passport.authenticate("github", { scope: ["profile"] }));

// router.get(
//   "/github/callback",
//   passport.authenticate("github", {
//     successRedirect: CLIENT_URL,
//     failureRedirect: "/login/failed",
//   })
// );

// router.get("/facebook", passport.authenticate("facebook", { scope: ["profile"] }));

// router.get(
//   "/facebook/callback",
//   passport.authenticate("facebook", {
//     successRedirect: CLIENT_URL,
//     failureRedirect: "/login/failed",
//   })
// );

module.exports = router;
