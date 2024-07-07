import mongoose from "mongoose";

const feedbackSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    feedbackText: { type: String, required: true }
});

const FeedbackModel = mongoose.models.Feedback || mongoose.model("Feedback", feedbackSchema);

export default FeedbackModel;