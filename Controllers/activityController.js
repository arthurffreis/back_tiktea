
import activityModel from "../Models/activityModel.js";

const addActivity = async (req, res) => {
    const { activity, day, startTime, endTime, image, local, isCompleted, completionTime } = req.body;
    const userId = req.user.id;
    console.log(req.body);

    try {
        const newActivity = new activityModel({ activity, day, startTime, endTime, image, local, isCompleted, completionTime, user: userId });
        const savedActivity = await newActivity.save();
        res.status(201).json(savedActivity);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteActivity = async (req, res) => {
    try {
        const deletedActivity = await activityModel.findOneAndDelete({ _id: req.params.id, user: req.user.id });
        if (!deletedActivity) {
            return res.status(404).json({ message: "Activity not found" });
        }
        res.status(200).json({ message: "Activity deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getAllActivities = async (req, res) => {
    try {
        const activities = await activityModel.find({ user: req.user.id }); 
        res.status(200).json(activities);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getActivityById = async (req, res) => {
    try {
        const activity = await activityModel.findOne({ _id: req.params.id, user: req.user.id });
        if (!activity) {
            return res.status(404).json({ message: "Activity not found" });
        }
        res.status(200).json(activity);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateActivity = async (req, res) => {
    try {
        const updatedActivity = await activityModel.findOneAndUpdate(
            { _id: req.params.id, user: req.user.id }, 
            req.body, 
            { new: true }
        );
        if (!updatedActivity) {
            return res.status(404).json({ message: "Activity not found" });
        }
        res.status(200).json(updatedActivity);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};



const getActivitiesByDay = async (req, res) => {
    const { day } = req.params; 
    const dayAsNumber = parseInt(day); 

    if (isNaN(dayAsNumber)) {
        return res.status(400).json({ message: "Invalid day format" });
    }

    try {
        const activities = await activityModel.find({ user: req.query.user, day: dayAsNumber, });
        console.log(activities)
        console.log(req.query.user)
        console.log(dayAsNumber)
        if (activities.length === 0) {
            return res.status(404).json({ message: "No activities found for this day" });
        }
        res.status(200).json(activities);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export { addActivity, getAllActivities, getActivityById, updateActivity, deleteActivity, getActivitiesByDay};

