import express, { NextFunction, Request, Response } from "express";
const app = express();
const port = 3000;

//parsers
app.use(express.json());

//router

const userRouter = express.Router();
const courseRouter = express.Router();


app.use("/api/v1/users", userRouter);
app.use("/api/v1/course", courseRouter);

//middleware

const logger = (req: Request, res: Response, next: NextFunction) => {
    console.log(req.url, req.method, req.hostname);
    next();
};

userRouter.get("/:userId", logger, (req: Request, res: Response) => {
  //   console.log(req.params.userId);
  res.send("Here is the user");
});

userRouter.post("/create-user", (req: Request, res: Response) => {
  const user = req.body;

  console.log(user);

  res.json({
    success: true,
    message: "User created successfully",
    data: user,
  });
});

courseRouter.post("/create-course",(req:Request,res:Response)=>{

    const course = req.body
    res.json({
      success: true,
      message: "Course created successfully",
      data: course,
    });


})







app.get("/", logger,async (req: Request, res: Response,next:NextFunction) => {

    try{
        res.send(something);

    }catch(err){
    //  res.status(400).json({
    //     success:false,
    //     message: "failed to get data"
    //  })

    next(err)
    }

});


app.post("/", logger, (req: Request, res: Response) => {
  console.log(req.body);
  res.json({
    message: "successfully received data",
  });
});

app.all("*",(req:Request,res:Response)=>{
    res.status(400).json({
        success:false,
        message:"Not found"
    })
})
// global err handler

app.use((err:any,req:Request,res:Response,next:NextFunction)=>{
  console.log(err);
   res.status(400).json({
      success:false,
      message: "failed to get data"
   })
})

export { app, port };
