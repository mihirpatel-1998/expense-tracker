const { ValidationError } = require('sequelize')
const User = require('../models/user')

exports.register = async (req, res) => {
  try {
    console.log("Req:",req.body)
  
    let result = await User.create({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      mobile: req.body.mobile,
      password: req.body.password
    })
    console.log("reuslt:",result)
  } catch (error) {
    // console.log("---",error instanceof ValidationError)
    if(error instanceof ValidationError){
      const errObj = {};
      for (const value of error.errors) {
        errObj[value.path] = value.message
      }
      // console.log("error:-",errObj)
      res.status(422).json(errObj)
    }
  }
}

// 945078757332