import mongoose from 'mongoose';

const DIYSchema = mongoose.Schema({
  taobaoID: String,
  productType: String,
  productStyle: String,
  imgURL: String,
});

DIYSchema.statics.create = async (DIYparams) => {
  const newDIY = new DIY(DIYparams);
  return newDIY.save();
};

const DIY = mongoose.model('DIY', DIYSchema);

export default DIY;
