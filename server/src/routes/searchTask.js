import express from 'express';
import { searchTaskByPriority } from '../controllers/searchRouter.js';

const searchRouter = express.Router();

searchRouter.get("/", searchTaskByPriority);

export default searchRouter;