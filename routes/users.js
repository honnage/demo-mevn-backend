import routerx from 'express-promise-router'
import UsersController from '../controllers/UsersController'

const router = routerx()

router.post('/add', UsersController.add)
router.get('/query', UsersController.query)
router.get('/list', UsersController.list)
router.put('/update', UsersController.update)
router.delete('/remove', UsersController.remove)
router.put('/activate', UsersController.activate)
router.put('/deactivate', UsersController.deactivate)

export default router