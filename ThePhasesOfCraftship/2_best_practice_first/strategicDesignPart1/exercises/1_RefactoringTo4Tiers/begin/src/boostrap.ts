import Server from "./server";
import Database from "./database";
import {
  AssignmentController,
  ClassController,
  StudentController,
} from "./controllers";
import {
  AssignmentService,
  ClassService,
  StudentService,
} from "./services";
import { errorHandler } from "./shared/errors";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const db = new Database(prisma);

const studentService = new StudentService(db);
const classService = new ClassService(db);
const assignmentService = new AssignmentService(db);

const studentController = new StudentController(
  studentService,
  errorHandler
);
const classController = new ClassController(classService, errorHandler);
const assignmentController = new AssignmentController(
  assignmentService,
  errorHandler
);
const server = new Server(
  studentController,
  classController,
  assignmentController
);

export default server;

