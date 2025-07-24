import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
    task:{
        type: String,
        required: true,
    },
    deadline: {
        type: Date,
        required: true,
    },
    priority: {
        type: String,
        enum: ["Least", "Moderate", "Highest"]
    }
},
{
    timestamps: true,
}
)

const Task = mongoose.model("Task", taskSchema);

export default Task;