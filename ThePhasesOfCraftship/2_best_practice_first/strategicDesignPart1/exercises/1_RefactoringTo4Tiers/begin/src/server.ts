
import express, { Application as ExpressApp } from "express";
import {
  AssignmentController,
  ClassController,
  StudentController,
} from "./controllers";
import { Server as HttpServer } from "http";

class Server {
  private readonly _instance: ExpressApp;

  get instance(): ExpressApp {
    return this._instance;
  }
  constructor(
    private studentController: StudentController,
    private classController: ClassController,
    private assignmentController: AssignmentController
  ) {
    this._instance = express();
    this.addMiddlewares();
    this.registerRouters();
  }
  private addMiddlewares() {
    this._instance.use(express.json());
  }

  private registerRouters() {
    this._instance.use("/students", this.studentController.getRouter());
    this._instance.use("/classes", this.classController.getRouter());
    this._instance.use("/assignments", this.assignmentController.getRouter());
  }

  public start(port: number) {
    const server = this._instance.listen(port, () =>
      console.log(`Listening on port ${port}`)
    );
    this.enableGracefulShutdown(server);
  }

  private enableGracefulShutdown(httpServer: HttpServer): void {
    const gracefulShutdown = () => {
      console.log("Received kill signal, shutting down gracefully");
      httpServer.close(() => {
        console.log("Closed out remaining connections");
        process.exit(0);
      });
  
      setTimeout(() => {
        console.error(
          "Could not close connections in time, forcefully shutting down"
        );
        process.exit(1);
      }, 10000);
    };
  
    process.on("SIGINT", gracefulShutdown);
    process.on("SIGTERM", gracefulShutdown);
  }
}

export default Server;
