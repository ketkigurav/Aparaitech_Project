import Job from '../models/Job.js'

// create the - job admin only
export const createJob = async (req, res) => {
    try {
        const { title,
            department,
            description,
            location,
            isRemote,
            type,
            experience,
            techStack,
            salaryRange } = req.body;

        if (!title || !department || !description || !type || !experience) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const newJob = await Job.create({
            title,
            department,
            description,
            location,
            isRemote,
            type,
            experience,
            techStack,
            salaryRange

        });

        return res.status(200).json({ success: true, message: "Job created successfully", job: newJob });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Server Issue", success: false });
    }
}


// update job - admin only
export const updateJob = async () => {
    try {
        const { id } = req.body;

        const updateJob = await Job.findByIdAndUpdate(id, req.body, {
            new: true,
            runValidators: true
        });

        if (!updateJob) {
            return res.status(404).json({ success: false, message: "Job not found" })
        }

        res.status(200).json({ success: true, message: "Job updated successfully!" })
    } catch (error) {
        res.status(500).json({ success: false, message: "Server Issue" })
    }
}

// delete job - admin only
export const deleteJob = async () => {
    try {
        const { id } = req.params;

        const deletedJob = await Job.findByIdAndDelete(id);

        if (!deleteJob) {
            return res.status(404).json({ success: false, message: "Job not found" })
        }

        res.status(200).json({ success: true, message: "Job deleted successfully" });
    } catch (error) {
        res.status(500).json({ success: false, message: "Server Issue" })
    }
}

// get all jobs - User
export const getAllJobs = async () => {
    try {
        const jobs = await Job.find().sort({ createdAt: -1 });

        res.status(200).json({ success: true, total: jobs.length, jobs });
    } catch (error) {
        res.status(500).json({ success: false, message: "Server error while fetching the jobs" });
    }
}

// get single job body
export const getJobById = async (req, res) => {
    try {
        const { id } = req.params;

        const job = await Job.findById(id);

        if (!job) {
            return res.status(404).json({ success: false, message: "Job not found" });
        };

        res.status(200).json({ success: true, job });
    } catch (error) {
        res.status(500).json({ success: false, message: "Server side error" });
    }
}