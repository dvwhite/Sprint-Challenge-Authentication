const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const router = express.Router();

// Subroutes
const restricted = require("./authenticate-middleware");
const jokesRoute = require("../jokes/jokes-router");
router.use("/jokes", restricted(), jokesRoute);

// Db helper fns
const { findBy, insert } = require("./../users/users-model");

router.post("/register", async (req, res) => {
  try {
    const user = req.body;
    const hash = bcrypt.hashSync(req.body.password, Number(process.env.HASHES));
    user.password = hash;
    const newUser = await insert(user);
    res.status(201).json({
      message: `Registered ${newUser.username} successfully`,
      validation: [],
      data: newUser,
    });
  } catch (err) {
    errDetail(res, err);
  }
});

/**
 * @function validateUsername: Validate the the id exists before submitting req
 * @param {*} req: The request object sent to the API
 * @param {*} res: The response object sent from the API
 * @param {*} next: The express middleware function to move to the next middleware
 * @returns: none
 */
async function validateUsername(req, res, next) {
  try {
    const { username } = req.body;
    const user = await findBy({ username });
    if (!user) {
      return res.status(404).json({
        message: "Not Found",
        validation: ["Username doesn't exist"],
        data: {},
      });
    }
    next();
  } catch (err) {
    errDetail(res, err);
  }
}
function errDetail(res, err) {
  console.log(err);
  return res.status(500).json({
    message: "There was a problem completing the required operation",
    validation: [],
    data: {},
  });
}

module.exports = router;
