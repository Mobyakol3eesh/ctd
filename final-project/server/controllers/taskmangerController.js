const User = require("../models/userModel");

let deleteTask = async (req, res) => {
    const index = parseInt(req.params.index);
    try {
        const user = await User.findById(req.user.userID);
        if (!user) {
            return res.json({ message: "Could not find user Delete Failed" });
        }
        if (index < 0 || index >= user.tasks.length) {
            return res.json({ message: "Invalid task index" });
        }
        user.tasks.splice(index, 1);
        await user.save();
        return res.json({
            message: "Task deleted successfully",
            tasks: user.tasks,
        });
    } catch (err) {
        console.error("Error deleting task:", err);
        return res.json({ message: "Error deleting task" });
    }
};
let addTask = async (req, res) => {
    try {
        const user = await User.findById(req.user.userID);
        if (!user) {
            return res.json({ message: "Could not find user Add Failed" });
        }
        user.tasks.push(req.body);
        await user.save();
        return res.json({
            message: "Task added successfully",
            tasks: user.tasks,
        });
    } catch (err) {
        console.error("Error adding task:", err);
        return res.json({ message: "Error adding task" });
    }
};
let updateTask = async (req, res) => {
    const index = parseInt(req.params.index);
    try {
        const user = await User.findById(req.user.userID);
        if (!user) {
            return res.json({ message: "Could not find user Update Failed" });
        }
        if (index < 0 || index >= user.tasks.length) {
            return res.json({ message: "Invalid task index" });
        }
        user.tasks[index] = req.body;
        await user.save();
        return res.json({
            message: "Task updated successfully",
            tasks: user.tasks,
        });
    } catch (err) {
        console.error("Error updating task:", err);
        return res.json({ message: "Error updating task" });
    }

};

module.exports = { deleteTask, addTask, updateTask };
