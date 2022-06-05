const { Router } = require("express");

import multer from "multer";
import multerConfig from "./config/multer";

import "./database/index";

import UserController from "./app/controllers/UserController";
import SessionController from "./app/controllers/SessionController";
import FileController from "./app/controllers/FileController";

import authMiddleware from "./app/middlewares/auth";

const routes = new Router();
const upload = multer(multerConfig);

routes.post("/users", UserController.store);
routes.post("/session", SessionController.store);

// Rotas autenticadas
routes.use(authMiddleware);
routes.put("/users", UserController.update);

// Upload de arquivos
routes.post("/files", upload.single("file"), FileController.store);

module.exports = routes;
