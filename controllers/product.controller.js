import Product from "../models/product.model.js";

const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



const getProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id);
        if (product) {
            res.status(200).json(product);
        } else {
            res.status(404).json({ message: "Product not found" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

};


const createProduct = async (req, res) => {
  try {
      const product = await Product.create(req.body);
      await product.save();
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


const updateProduct = async (req, res) => {
 try {
   const { id } = req.params;
   const product = await Product.findByIdAndUpdate(id, req.body);
   if (product) {
     const updatedProduct = await Product.findById(product.id);
     res.status(200).json(updatedProduct);
   } else {
     res.status(404).json({ message: "Product not found" });
   }
 } catch (error) {
   res.status(500).json({ message: error.message });
 }

}


const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product =await Product.findByIdAndDelete(id);
  
    if (product) {
      res.status(200).json({ message: "Product deleted successfully" });
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
    

export { getProducts, getProduct, createProduct, updateProduct, deleteProduct } ;
