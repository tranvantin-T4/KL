import express from 'express';
import { addReviewSV, getReviewsByService, removeReviewSV } from '../controllers/reviewdvController.js';

const router = express.Router();
router.post('/add', addReviewSV);
router.get('/:serviceId', getReviewsByService);
router.delete('/:id', removeReviewSV);

export default router;
