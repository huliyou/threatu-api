import { schema } from '../middlewares';
import Product from '../models/product';
/**
 * 查询产品
 * @param  {[type]} ctx [description]
 * @return {[type]}     [description]
 */
export async function list(ctx) {
  // 分类
  const productType = ctx.request.query.productType;
  // 风格
  const productStyle = ctx.request.query.productStyle;
  // 颜色
  const productColor = ctx.request.query.productColor;
  let result;
  if (productType || productStyle || productColor) {
    result = await Product.find({
      $or: [
        { $or: [{ productType }] },
        { $or: [{ productStyle }] },
        { $or: [{ productColor }] },
      ],
    });
  } else {
    result = await Product.find();
  }
  if (result) {
    ctx.body = {
      data: result,
      code: 0,
    };
  } else {
    ctx.body = {
      success: false,
    };
  }
}


export const createSchema = schema({
  type: 'object',
  properties: {
    productType: {
      type: 'string',
    },
    productStyle: {
      type: 'string',
    },
    productColor: {
      type: 'string',
    },
  },
  required: ['productType', 'productStyle', 'productColor'],
});
export async function create(ctx) {
  const body = ctx.request.body;
  // 类型
  const productType = body.productType;
  // 风格
  const productStyle = body.productStyle;
  // 颜色
  const productColor = body.productColor;
  const imgURL = body.imgURL;
  const product = await Product.create({
    productType,
    productStyle,
    productColor,
    imgURL,
  });
  if (product) {
    ctx.body = {
      data: product,
      code: 0,
    };
  } else {
    ctx.body = {
      code: 5000,
      data: 'can not save',
    };
  }
}
