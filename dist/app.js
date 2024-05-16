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
//router
const userRouter = express_1.default.Router();
const courseRouter = express_1.default.Router();
app.use("/api/v1/users", userRouter);
app.use("/api/v1/course", courseRouter);
//middleware
const logger = (req, res, next) => {
    console.log(req.url, req.method, req.hostname);
    next();
};
userRouter.get("/create-user", (req, res) => {
    const user = req.body;
    console.log(user);
    res.json({
        success: true,
        message: "User created successfully",
        data: user,
    });
});
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
