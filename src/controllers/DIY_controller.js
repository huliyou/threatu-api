import DIY from '../models/DIY';

export async function list(ctx) {
  const result = await DIY.find();
  if (result) {
    ctx.body = {
      data: result,
      code: 0,
    };
  } else {
    ctx.body = {
      success: false,
      code: 500,
    };
  }
}

export async function create(ctx) {
  const body = ctx.request.body;
  const taobaoID = body.taobaoID;
  const productType = body.productType;
  const productStyle = body.productStyle;
  const imgURL = body.imgURL;
  const result = await DIY.create({
    taobaoID,
    productType,
    productStyle,
    imgURL,
  });
  if (result) {
    ctx.body = {
      data: result,
      code: 0,
    };
  } else {
    ctx.body = {
      code: 500,
    };
  }
}
