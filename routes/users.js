import routerx from 'express-promise-router'
import UsersController from '../controllers/UsersController'
import auth from '../middlewares/auth'

const router = routerx()

router.post('/add',   UsersController.add)
router.get('/query', auth.verifyAdmin, UsersController.query)
router.get('/list', auth.verifyAdmin, UsersController.list)
router.put('/update', auth.verifyAdmin, UsersController.update)
router.delete('/remove', auth.verifyAdmin, UsersController.remove)
router.put('/activate', auth.verifyAdmin, UsersController.activate)
router.put('/deactivate', auth.verifyAdmin,  UsersController.deactivate)
router.post('/login', UsersController.login)

export default router