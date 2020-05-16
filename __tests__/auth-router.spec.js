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

describe("the auth route", () => {
  describe("/register", () => {
    beforeEach(async (done) => {
      try {
        await db("users").truncate();
        done();
      } catch (err) {
        console.log("Unable to truncate the database", err);
        done(err);
      }
    });

    it("inserts a new user into the db", async () => {
      // Ensure users have been truncated properly
      const noUsers = await dbHasNoUsers();
      expect(noUsers).toBe(true);
      // Test the endpoint
      const res = await request(server).post("/api/register").send(testUser);
      expect(res.statusCode).toBe(201);
      expect(res.type).toBe("application/json");
      expect(verifyProperties(res.body.data, ["username", "role"])).toBe(true);
      expect(res.body.data.username).toBe(testUser.username);
      expect(res.body.data.role).toBe(testUser.role);
    });
