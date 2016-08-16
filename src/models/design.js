import mongoose from 'mongoose';

const designSchema = mongoose.Schema({
  taobaoID: String,
  phone: String,
  email: String,
  imgURL: String,
});

designSchema.statics.create = async (design) => {
  const newDesign = new Design(design);
  return newDesign.save();
};

const Design = mongoose.model('Design', designSchema);

export default Design;
