import routerx from 'express-promise-router'
import CategoriesRouter from './categories'
import ArticleRouter from './article'
import UsersRouter from './users'

const router = routerx()

router.use('/categories', CategoriesRouter)
router.use('/article', ArticleRouter)
router.use('/users', UsersRouter)


export default router