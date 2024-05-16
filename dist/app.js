"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.port = exports.app = void 0;
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
exports.app = app;
const port = 3000;
exports.port = port;
//parsers
app.use(express_1.default.json());
//middleware
const logger = (req, res, next) => {
    console.log(req.url, req.method, req.hostname);
    next();
};
app.get("/", logger, (req, res) => {
    res.send("Hello World!");
});
app.get("/:userId", logger, (req, res) => {
    //   console.log(req.params.userId);
    res.send("Here is the user");
});
app.post("/", logger, (req, res) => {
    console.log(req.body);
    res.json({
        message: "successfully received data",
    });
});
