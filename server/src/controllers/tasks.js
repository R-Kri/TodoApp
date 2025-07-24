import Task from "../model/task.js";

const getAllTask = async (req, res) => {
    try {
        const task = await Task.find();
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({err: "Failed to fetch", details: error.message});
    }
}

const createTask = async (req, res) => {
    try {
        const {task, deadline, priority} = req.body;

        if(!task || !deadline) {
            return res.status(400).json({error: "Tasks and deadline are required"});
        }

        const [day, month, year] = deadline.split("-");
        const formattedDate = new Date(`${year}-${month}-${day}`);

        if(isNaN(formattedDate)){
            return res.status(400).json({error: "Invalid date formate. use DD-MM-YYYY"})
        }

        const newTask = await Task.create({task, deadline: formattedDate, priority});
        res.status(201).json(newTask);
    } catch (error) {
        res.status(500).json({error: "Failed to create a new Task", details: error.message})
    }
}

const updateTask = async (req, res) => {
    try {
        const {id} = req.params;

        const updatedTask = await Task.findByIdAndUpdate(id, req.body, {
            new: true,
            runValidators: true,
        });

        if(!updateTask) {
            return res.status(400).json({error: "Task not found"});
        }

        res.status(200).json(updatedTask);

    } catch (error) {
        res.status(500).json({error: "Task cannot be updated", details: error.message})
    }
}

const deleteTask = async (req, res) => {
    try {
        const {id} = req.params;

    const deletedTask = await Task.findByIdAndDelete(id);

    if(!deleteTask) {
        return res.status(400).json({error: "Task not found"});
    }

    res.status(200).json({message: "Task successfully deleted", deletedTask})
    } catch (error) {
        res.status(500).json({error: "Task cannot be deleted", details: error.message})
    }
}

export {
    getAllTask,
    createTask,
    updateTask,
    deleteTask
}