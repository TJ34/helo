module.exports = {
    createUser(req,res){
        const {username, password} = req.body;
        let db=req.app.get('db');
        db.create_user([username, password]).then(user => {
            return res.status(200).json(user)
        })
    },
    logIn(req, res){
        const{username,password}=req.body;
        let db=req.app.get('db');
        db.log_in([username, password]).then(user => {
            return res.status(200).json(user)
        })
    }
}