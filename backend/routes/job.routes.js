import express from 'express';
import { createJob, deleteJob, getAllJobs, getJobById, updateJob } from '../controlllers/job.controller.js';
import { adminAuth } from '../middleware/adminAuth.js';

const router = express.Router();

router.get('/', getAllJobs);

router.get('/:id', getJobById);

router.post('/', adminAuth, createJob);

router.put('/:id', adminAuth, updateJob);

router.delete('/:id', adminAuth, deleteJob);

export default router;