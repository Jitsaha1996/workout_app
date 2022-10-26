const asynHandler=require('express-async-handler');
const jwtToken = require('../utils/generateTokes');
const User = require('../models/usersModel');
const jwt=require('jsonwebtoken');


const protect = asynHandler(async (req, res, next) => {
  let token;
    console.log(req.headers.authorization,"token");
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    console.log("hiii");
    try {
      token = req.headers.authorization.split(" ")[1];

      //decodes token id
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log("decoded", decoded);

      req.user = await User.findById(decoded.id).select("-password");

      next();
    } catch (error) {
        
      res.status(401);
      throw new Error("Not authorized, token failed");
    }
  }

  if (!token) {
    res.status(401);
    throw new Error("Not authorized, no token");
  }
});

module.exports= { protect };