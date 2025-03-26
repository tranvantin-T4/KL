import Review from '../models/reviewspModel';
const addReview = async (req, res) => {
    let image_filename = req.file ? req.file.filename : null; 
    const { productId, userId, rating, comment } = req.body;
  
    if (!productId || !userId || !rating || !comment || !image_filename) {
      return res.status(400).json({ success: false, message: 'Missing required fields' });
    }
  
    try {
      const newReview = new Review({
        productId,
        userId,
        rating,
        comment,
        image: image_filename, 
      });
  
      await newReview.save();
      res.status(201).json({ success: true, message: 'Review added successfully', review: newReview });
    } catch (error) {
      console.error('Error adding review:', error);
      res.status(500).json({ success: false, message: 'Failed to add review' });
    }
  };
  // Lấy tất cả đánh giá của một sản phẩm
    const getReviewsByProduct = async (req, res) => {
    const { productId } = req.params;
  
    try {
      const reviews = await Review.find({ productId }).sort({ date: -1 }); // Lấy tất cả review theo productId
      res.json({ success: true, reviews });
    } catch (error) {
      console.error('Error fetching reviews:', error);
      res.status(500).json({ success: false, message: 'Failed to fetch reviews' });
    }
  };
   const removeReview = async (req, res) => {
    const { id } = req.params;
  
    try {
      await Review.findByIdAndDelete(id);
      res.status(200).json({ success: true, message: 'Review removed successfully' });
    } catch (error) {
      console.error('Error removing review:', error);
      res.status(500).json({ success: false, message: 'Failed to remove review' });
    }
  };
  export{addReview,removeReview,getReviewsByProduct}
  