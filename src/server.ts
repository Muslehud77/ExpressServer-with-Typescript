import { Server } from "http";
import { app, port } from "./app";



let server : Server


async function bootStrap(){
    server =  app.listen(port, () => {
      console.log(`app listening on port ${port}`);
    });

}

bootStrap()
