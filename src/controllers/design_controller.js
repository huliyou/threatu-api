import Design from '../models/design';

export async function list(ctx) {
  const result = await Design.find();
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
  const requestBoyd = ctx.request.body;
  const {
    taobaoID,
    phone,
    email,
    imgURL,
  } = requestBoyd;
  const result = Design.create({
    taobaoID,
    phone,
    email,
    imgURL,
  });
  if (result) {
    ctx.body = {
      data: result,
      code: 0,
    };
  } else {
    ctx.body = {
      success: false,
      message: '错误',
      code: 500,
    };
  }
}
