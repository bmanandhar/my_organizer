const 
    bcrypt = require('bcrypt'),
    db = require('../models'),
    jwt = require('jsonwebtoken')

module.exports = {
    signup : (req, res) => {
        console.log(req.body);
        db.User.findOne({email: req.body.email}).exec().then( user => {
            if (user) {
                return res.status(409).json({message: "email already exists"})
            } else {
              bcrypt.hash(req.body.password, 10, (err, hash) => {
                if(err){ 
                  console.log("hashing error:", err);
                  res.status(200).json({error: err})
                } 
                else {
                  db.User.create({email: req.body.email, password: hash}, (err, result) => {  
                    if(err){ 
                      return res.status(500).json({err})
                    }
                    res.json(result);
                  })
                }
              })
            }
          })
          .catch( err => {
            console.log(err);
            res.status(500).json({err})
          })
      },
    login: (req, res) => {
        console.log("body", req.body)
        db.User.findOne({email: req.body.email}).select('+password').exec().then( user => {
            if(!user) {
              return res.status(401).json({message: "Email/Password incorrect"})
            }
            bcrypt.compare(req.body.password, user.password, (err, match) => {
              if(err){
                console.log(err);
                return res.status(500).json({err})
              }
            
              if(match){
                return res.status(200).json(
                  {
                    message: 'Auth successful',
                    user
                  }
                )
              // the password provided does not match the password on file.
              } else {
                res.status(401).json({message: "Email/Password incorrect"})
              }
            })
      
      
          })
          .catch( err => {
            console.log("OUTSIDE ERROR_")
            console.log(err);
            res.status(500).json({err})
          })
        },
    delete: (req, res) => {
        console.log("hitting delete");
        db.User.deleteOne({_id: req.params.userId}, (err, result) =>{
          if(err){return res.status(500).json({err})}
          res.status(200).json({result})
        })
      },
    index: (req,res) => {
      db.User.find({})
      .exec((err,users)=>{
        res.json({data:users})
      })
    }
}