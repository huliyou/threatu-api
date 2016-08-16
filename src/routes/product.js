import Router from 'koa-router';
import * as $ from '../controllers/product_controller';
import { error } from '../middlewares';

const router = new Router();
router.use(error());

// URL routes:
// GET  /products[/]         => product.list()
// POST /products[/]         => product.create()

router.prefix('/products');

router.get('/', $.list);
router.post('/', $.create);
export default router;
