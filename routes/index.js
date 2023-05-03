import routerx from 'express-promise-router'
import CategoriesRouter from './categories'

const router = routerx()

router.use('/categories', CategoriesRouter)

export default router