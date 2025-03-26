import express from 'express';
import multer from 'multer';
import { addReview, getReviewsByProduct, removeReview } from '../controllers/reviewspController';

const router = express.Router();


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage });
router.post('/add', upload.single('image'), addReview);
router.get('/:productId', getReviewsByProduct);
router.delete('/:id', removeReview);

export default router;
