import mongoose from 'mongoose';

const jobSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    department: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true
    },
    location: {
        type: String,
        default: "Remote"
    },
    isRemote: {
        type: Boolean,
        default: false
    },
    type: {
        type: String,
        enum: ["Full-Time", "Part-Time", "Internship"],
        required: true
    },
    experience: {
        type: String,
        required: true
    },
    techStack: {
        type: [String],
        default: []
    },
    salaryRange: {
        type: String,
        default: "Not Disclosed"
    }
}, { timestamps: true });

const Job = mongoose.model("Job", jobSchema);

export default Job; 