import mongoose from "mongoose";

const ProductSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter product name."],
    },

    category: {
      type: String,
      required: [true, "Please enter product category."],
    },

    nutrients: {
      type: String,
      required: [true, "Please enter product nutrients"],
      default: "N/A",
    },

    benefits: {
      type: String,
      required: [true, "Please enter product benefits"],
      default: "N/A",
    },

   
    quantity: {
      type: Number,
      required: [true, "Please enter product quantity"],
      default: 1,
    },
   
    image: {
      type: String,
      required: [false, "Please upload product image"],
    },
  },
  {
    timestamps: true,
  }
);

// allow mongoDB to use this
 
//  export default Product;
// within the Mongo db
const Product = mongoose.model("Product", ProductSchema);

// module.exports = Product;
export default Product;