import Router from 'koa-router';
import * as $ from '../controllers/DIY_controller';
import { error } from '../middlewares';

const router = new Router();
router.use(error());

// URL routes:
// GET  /DIYs[/]         => product.list()
// POST /DIYs[/]         => product.create()

router.prefix('/DIYs');

router.get('/', $.list);
router.post('/', $.create);
export default router;
