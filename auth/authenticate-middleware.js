/* 
  complete the middleware code to check if the user is logged in
  before granting access to the next middleware/route handler
*/

const jwt = require("jsonwebtoken");
const { errDetail } = require("../utils/utils");

function restrict() {
  const authError = {
    message: "Invalid credentials",
    validation: [],
    data: {}
  };
  
  return async (req, res, next) => {
    try {
      console.log("token:", token)
      const { token } = req.authorization;
      if (!token) {
        return res.status(401).json(authError);
      }

      jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
          return res.status(401).json(authError);
        } 

        req.token = decoded;
        next();
      })
    } catch (err) {
      errDetail(res, err)
    }
  }
};

module.exports = restrict;