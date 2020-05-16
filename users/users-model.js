const db = require("../database/dbConfig");

module.exports = {
  find,
  findBy,
  insert
};

function find() {
  return db("users")
};

function findBy(field) {
  return db("users")
    .where(field)
    .first();
};

function insert(user) {
  return db("users")
    .insert(user)
    .then(async ids => {
      const user = await findBy({ id: ids[0] });
      return user;
    });
};