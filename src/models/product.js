import mongoose from 'mongoose';

const productSchema = mongoose.Schema({
  productType: String,
  productStyle: String,
  productColor: String,
  imgURL: String,
});

productSchema.statics.create = async function (product) {
  const newProduct = new Product(product);
  return newProduct.save();
};

const Product = mongoose.model('Product', productSchema);

export default Product;
