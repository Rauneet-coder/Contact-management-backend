const express = require("express");
const UserRouter = express.Router();
const { getContact, postContact ,putContact ,deleteContact, getContactid } = require("../controller/ContactController.js");

UserRouter.route("/").get(getContact).post(postContact);
UserRouter.route("/:id").put(putContact).delete(deleteContact).get(getContactid);


module.exports = UserRouter;