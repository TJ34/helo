module.exports = {
    createUser(req,res){
        const {username, password} = req.body;
        let db=req.app.get('db');
        db.create_user([username, password]).then(user => {
            req.session.userid=user.id;
            return res.status(200).json(user)
        })
    },
    // logIn(req, res){
    //     const{username,password}=req.body;
    //     let db=req.app.get('db');
    //     db.log_in([username, password]).then(user => {
    //         req.session.userid=user.id;
    //         console.log(req.session.userid);
    //         return res.status(200).json(user)
    //     })
    // },
    getPosts(req, res){
        const {userid} = req.session;
        const {userposts, string} = req.query;
        let db=req.app.get('db');

        if(userposts && string){
            db.get_posts().then(posts => {
                let filtered = posts.filter(post => post.title.includes(string));
                return res.status(200).json(filtered);
            })
        } else if (userposts==='false' && !string){
            db.get_posts(userid).then(posts => {
                let filtered = posts.filter(post => post.author_id !== +userid);
                
                return res.status(200).json(filtered);
            })
        } else if (userposts==='false' && string !== ''){
            db.get_posts(userid).then(posts => {
                let filtered = posts.filter(post => post.author_id !== +userid).filter(post => post.title.includes(string))
                return res.status(200).json(filtered);
            })
        } else {
            db.get_posts().then(posts => {
            return res.status(200).json(posts);
            })}
    },
    getPost(req, res){
        const {id} = req.params;
        let db=req.app.get('db');

        db.get_post(id).then(post => {
            return res.status(200).json(post)
        })
    },
    getUser(req, res){
        const {userid} = req.session;
        let db=req.app.get('db');

        db.get_user(userid).then(user => {
            return res.status(200).json(user)
        })
    }
}