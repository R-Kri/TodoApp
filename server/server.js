import express from 'express';
import dotenv from 'dotenv';
import taskRouter from './src/routes/tasks.js';
import connectDB from './src/config/db.js';
import searchRouter from './src/routes/searchTask.js';
dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

connectDB();

app.use(express.json());

app.use("/api/task", taskRouter);
app.use("/api/search", searchRouter);

app.listen(PORT, () => {
    console.log(`Server is running on PORT: http://localhost:${PORT}`);
})

console.log("Hello World");