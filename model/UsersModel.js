const { model } = require('mongoose');
const { UsersSchema } = require("../schema/UsersSchema");

const UsersModel = model("user", UsersSchema); // ✅ no "new"

module.exports = { UsersModel };