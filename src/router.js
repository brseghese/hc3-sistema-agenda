const { Router } = require("express");
import "./database/index";
import UserController from "./app/controllers/UserController";

const routes = new Router();

routes.post("/users", UserController.store);

module.exports = routes;
