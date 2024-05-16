import express, { NextFunction, Request, Response } from "express";
const app = express();
const port = 3000;



//parsers
app.use(express.json())

//middleware

const logger = (req:Request,res:Response,next:NextFunction)=>{
    console.log(req.url,req.method,req.hostname);
    next()
}

app.get("/",logger, (req: Request, res: Response) => {
  res.send("Hello World!");
});


app.get("/:userId", logger, (req: Request, res: Response) => {
//   console.log(req.params.userId);
  res.send("Here is the user");
});



app.post("/", logger, (req: Request, res: Response) => {
  console.log(req.body);
  res.json({
    message: "successfully received data",
  });
});

export { app, port };
