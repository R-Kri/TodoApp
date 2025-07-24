import express from 'express';
import { createTask, deleteTask, getAllTask, updateTask } from '../controllers/tasks.js';

const taskRouter = express.Router();

taskRouter.get("/", getAllTask);
taskRouter.post("/", createTask);
// router.route("/").get(getAllTask).post(createTask);

taskRouter.put("/:id", updateTask);
taskRouter.delete("/:id", deleteTask);
// router.route("/:id").put(updateTask).delete(deleteTask);

export default taskRouter;