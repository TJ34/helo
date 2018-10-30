require ('dotenv').config();
const express = require("express");
const app=express();
const port = process.env.PORT || 3001;
const massive = require("massive");
const {json} = require("body-parser");
// const passport = require("passport");
// const session = require("express-session");

app.use(json());

// app.use(
//     session({
//         secret: process.env.SESSION_SECRET,
//         resave: false,
//         saveUninitialized: false,
//         cookie: {
//             maxAge: 100000
//         }
//     })
// )

massive(process.env.CONNECTION_STRING).then(dbInstance => {
    app.set('db', dbInstance);
}).catch(err => console.log(err));

// app.use(passport.initialize());
// app.use(passport.session());

// passport.use(strat);

// passport.serializeUser((user, done) => {
//     const db = app.get("db");
//     db.getUserByAuthId([user.id]).then(response => {
//         if(!response[0]){
//             db.addUserByAuthid([
//                 user.displayName,
//                 user.picture,
//                 user.emails[0].value,
//                 user.id
//             ]).then(res => done(null, res[0]))
//             .catch(console.log);
//         } else return done(null, response[0]);
//     })
//     .catch(console.log);
// });

// passport.deserializeUser((user, done) => done(null, user));

// app.get(
//     "/login",
//     passport.authenticate("auth0", {
//         successRedirect: process.env.REACT_APP_HOME,
//         failureRedirect: "/login"
//     })
// )

// authenticated = (req, res, next) => {
//     if(req.user) {
//         next();
//     } else {
//         res.sendStatus(403);
//     }
// };

// app.get("/api/me", authenticated, (req, res, next) => {
//     res.status(200).send(req.user);
// });

// app.get("/logout", logout);

app.listen(port, () => console.log(`Helo listening on ${port}`))