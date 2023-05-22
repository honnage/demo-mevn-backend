import routerx from 'express-promise-router'
import CategoriesController from '../controllers/CategoriesController'
import auth from '../middlewares/auth'

const router = routerx()

router.post('/add', auth.verifyWarehouse, CategoriesController.add)
router.get('/query', auth.verifyWarehouse, CategoriesController.query)
router.get('/list', auth.verifyWarehouse, CategoriesController.list)
router.put('/update', auth.verifyWarehouse, CategoriesController.update)
router.delete('/remove', auth.verifyWarehouse, CategoriesController.remove)
router.put('/activate', auth.verifyWarehouse, CategoriesController.activate)
router.put('/deactivate', auth.verifyWarehouse, CategoriesController.deactivate)

export default router