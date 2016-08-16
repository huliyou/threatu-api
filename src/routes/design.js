import Router from 'koa-router';
import * as $ from '../controllers/design_controller';
import { error } from '../middlewares';

const router = new Router();
router.use(error());

// URL routes:
// GET  /designs[/]         => design.list()
// POST /designs[/]         => design.create()

router.prefix('/designs');
router.get('/', $.list);
router.post('/', $.create);

export default router;
