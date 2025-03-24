import ProductModel from "../models/productModel.js"; 
import fs from 'fs';

// Thêm sản phẩm
const addProduct = async (req, res) => {
  console.log("Body:", req.body);
  console.log("File:", req.file);

  if (!req.file) {
    return res.status(400).json({ success: false, message: "No image file uploaded" });
  }

  let image_filename = `${req.file.filename}`;
  const product = new ProductModel({
    ProductName: req.body.name,
    DescriptionPD: req.body.description,
    PricePD: req.body.price,
    StockQuantity: req.body.stockQuantity,
    Category: req.body.category,
    ImagePD: image_filename,
  });

  try {
    await product.save();
    res.json({ success: true, message: 'Product Added' });
  } catch (error) {
   
    console.log(error);  // Xem chi tiết lỗi trong console
    res.status(500).json({ 
      success: false, 
      message: 'Error adding product'
    });
  }
};


// Liệt kê tất cả sản phẩm
const listProduct = async (req, res) => {
  try {
    const products = await ProductModel.find({});
    res.json({ success: true, data: products });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: 'Error retrieving products' });
  }
};

const removeProduct = async (req, res) => {
  try {
    const product = await ProductModel.findById(req.body.id);
    fs.unlink(`uploads/${product.ImagePD}`, () => {});
    await ProductModel.findByIdAndDelete(req.body.id);
    res.json({ success: true, message: 'Product Removed' });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: 'Error removing product' });
  }
};

export { addProduct, listProduct, removeProduct };
