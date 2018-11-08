require ('dotenv').config();
const express = require("express");
const app=express();
const port = process.env.PORT || 3001;
const massive = require("massive");
const {json} = require("body-parser");
// const passport = require("passport");
const session = require("express-session");

app.use(json());

const controller = require(`${__dirname}/controller`);

app.use(
    session({
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: true,
        cookie: {
            maxAge: 100000
        },
    })
)

massive(process.env.CONNECTION_STRING).then(dbInstance => {
    app.set('db', dbInstance);
}).catch(err => console.log(err));


app.post('/api/auth/register', controller.createUser);
app.post('/api/auth/login', (req, res) => {
    const{username,password}=req.body;
    let db=req.app.get('db');
    db.log_in([username, password]).then(user => {
        // req.session.userid=user.id;
        console.log(req.session);
        return res.status(200).json(user)
    })
});
app.get('/api/posts', controller.getPosts);
app.get('/api/post/:id', controller.getPost);
app.get('/api/auth/me', controller.getUser);

app.post('/api/auth/logout', (req, res) => {
    req.session.destroy(() => {
        res.redirect('/');
    });
});


app.listen(port, () => console.log(`Helo listening on ${port}`))