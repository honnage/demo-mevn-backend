import routerx from 'express-promise-router'
import CategoriesRouter from './categories'
import ArticleRouter from './article'

const router = routerx()

router.use('/categories', CategoriesRouter)
router.use('/article', ArticleRouter)

export default router