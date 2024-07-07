import FeedbackModel from "../Models/feedbackModel.js";

const createFeedback = async (req, res) => {
    const { feedbackText } = req.body;
    const userId = req.user.id;

    try {
        const newFeedback = new FeedbackModel({ userId, feedbackText });
        const savedFeedback = await newFeedback.save();
        res.status(201).json(savedFeedback);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export { createFeedback };