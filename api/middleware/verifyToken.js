const jwt = require("jsonwebtoken");
const User = require("../models/User");
// const Card = require("../models/Card");
const Set = require("../models/Set");

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.token;
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.JWT_SEC, (err, user) => {
      if (err){
        return res.status(403).json("Token is not valid!");
      }
      req.user = user;
      next();
    });
  } else {
    return res.status(401).json("You are not authenticated!");
  }
};

const verifyTokenAndAuthorization = (req, res, next) => {
  verifyToken(req, res, async () => {
    let FindUser = await User.findOne({ _id: req.user.id });
    if (FindUser !== null) {
      next();
    } else {
      return res.status(403).json("You are not allowed to do that!");
    }
  });
};

const verifySetAuthor = (req, res, next) => {
  verifyToken(req, res, async () => {
    let FindUser = await User.findOne({ _id: req.user.id });

    //Check User
    if (FindUser !== null) {
      const sets = await Set.findOne({ verify: req.user.id, _id: req.params.id });

      //Check Set with user id
      if (sets === null) {
        return res.status(403).json("You are not Author/Admin to do that");
      } else {
        next();
      }
    } else {
      return res.status(403).json("You are not allowed to do that")
    }
  })
};

const verifySet = (req, res, next) => {
  verifyToken(req, res, async () => {
    let FindUser = await User.findOne({ _id: req.user.id });

    //Check User
    if (FindUser !== null) {
      const sets = await Set.findOne({ verify: req.user.id, _id: req.params.set_id });

      //Check Set with user id
      if (sets === null) {
        return res.status(403).json("You are not Author/Admin to do that");
      } else {
        next();
      }
    } else {
      return res.status(403).json("You are not allowed to do that")
    }
  })
};


module.exports = {
  verifyToken,
  verifyTokenAndAuthorization,
  verifySet,
  verifySetAuthor
};
