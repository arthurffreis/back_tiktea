import mongoose from "mongoose";

const activitySchema = new mongoose.Schema({
    activity: { type: String, required: true },
    local: { type: String, required: true },
    day: { type: Number, required: true},
    startTime: { type: String, required: true },
    endTime: { type: String, required: true },
    image: { type: String, required: false },
    isCompleted: { type: Boolean, required: true, default: false }, 
    completionTime: { type: String, required: false },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }

});


const activityModel = mongoose.models.Activity || mongoose.model("Activity", activitySchema);

export default activityModel;
