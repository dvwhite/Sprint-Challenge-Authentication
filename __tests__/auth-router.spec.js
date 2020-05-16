const server = require("../server");
const request = require("supertest");
const db = require("../database/dbConfig");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Helpers
const verifyProperties = (obj, props) => {
  // Verifies that the object has the required properties
  objKeys = Object.keys(obj);
  return props.every((key) => objKeys.includes(key));
};

// Db helpers
const { find } = require("../routes/users/users-model");

// Test user credentials
const defaultPW = "123456";
const hash = bcrypt.hashSync(defaultPW, Number(process.env.HASHES));

const testUser = {
  username: "test User",
  password: hash,
};

const serverError = {
  message: "There was a problem completing the required operation",
  validation: [],
  data: {},
};


