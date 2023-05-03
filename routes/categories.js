import routerx from 'express-promise-router'
import CategoriesController from '../controllers/CategoriesController'

const router = routerx()

router.post('/add', CategoriesController.add)
router.get('/query', CategoriesController.query)
router.get('/list', CategoriesController.list)
router.put('/update', CategoriesController.update)
router.delete('/remote', CategoriesController.remove)
router.put('/activate', CategoriesController.activate)
router.put('/deactivate', CategoriesController.deactivate)

export default router