import Task from "../model/task.js"

export const searchTaskByPriority = async (req, res) => {

    try {
        const {priority} = req.body;

        if(!priority){
            return res.status(400).json({message: "Priority is required for search"});
        }

        const tasks = await Task.find({priority});

        if(tasks.length === 0) {
            return res.status(404).json({message:`cannot find any task with ${taskPriority} this priority`})
        }

        res.status(200).json(tasks);

    } catch (error) {
        res.status(500).json({error: "Cannot search the task", details: error.message})
    }
}

