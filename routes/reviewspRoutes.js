import express from 'express';
import { addReviewSP, getReviewsByProduct, removeReviewSP } from '../controllers/reviewspController.js';

const router = express.Router();

router.post('/add', addReviewSP);
router.get('/:productId', getReviewsByProduct);
router.delete('/:id', removeReviewSP);

export default router;
