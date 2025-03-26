import ProductModel from "../models/productModel.js"; 
import fs from 'fs';

// Thêm sản phẩm
const addProduct = async (req, res) => {

  let image_filename = `${req.file.filename}`; 
  const product = new ProductModel({
  ProductName: req.body.ProductName,
  DescriptionPD: req.body.DescriptionPD,
  PricePD: req.body.PricePD,
  StockQuantity: req.body.StockQuantity,
  Category: req.body.Category,
  ImagePD: image_filename,
  });

  try {
    await product.save();
    res.json({ success: true, message: 'Product Added' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ 
      success: false, 
      message: 'Error adding product'
    });
  }
};


const listProduct = async (req, res) => {
  try {
    const products = await ProductModel.find({});
    res.json({ success: true, data: products });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: 'Error retrieving products' });
  }
};

// Xóa sản phẩm
const removeProduct = async (req, res) => {
  try {
    const product = await ProductModel.findById(req.body.id);
    fs.unlink(`uploads/${product.ImagePD}`, (err) => {
      if (err) console.log(err);  
    });
    await ProductModel.findByIdAndDelete(req.body.id);
    res.json({ success: true, message: 'Product Removed' });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: 'Error removing product' });
  }
};

export { addProduct, listProduct, removeProduct };
