import models from "../models"

export default {
    add: async (req, res, next) => {
        try {
            const data = await models.Article.create(req.body)
            res.status(200).json(data)
        } catch (e) {
            res.status(500).send({
                message: 'Internal Server Error'
            })
            next(e)
        }
    },
    query: async (req, res, next) => {
        try {
            const data = await models.Article.findOne({ _id: req.query._id })
                .populate('categories', { name: 1 })
            if (!data) {
                res.status(404).send({
                    message: 'Not Found'
                })
            } else {
                res.status(200).json(data)
            }
        } catch (e) {
            res.status(500).send({
                message: 'Internal Server Error'
            })
            next(e)
        }
    },
    list: async (req, res, next) => {
        try {
            let filter = req.query.filter
            const data = await models.Article.find({ $or: [{ 'name': new RegExp(filter, 'i') }, { 'description': new RegExp(filter, 'i') }] }, { createdAt: 0 })
                .populate('categories', { name: 1 })
                .sort({ 'createdAt': -1 })
            res.status(200).json(data)
        } catch (e) {
            res.status(500).send({
                message: 'Internal Server Error'
            })
            next(e)
        }
    },
    update: async (req, res, next) => {
        try {
            const data = await models.Article.findByIdAndUpdate({ _id: req.body._id }, {
                categories: req.body.categories,
                code: req.body.code,
                name: req.body.name,
                description: req.body.description,
                discount: req.body.discount,
                stock: req.body.stock,
            })
            res.status(200).json(data)
        } catch (e) {
            res.status(500).send({
                message: 'Internal Server Error'
            })
            next(e)
        }
    },
    remove: async (req, res, next) => {
        try {
            const data = await models.Article.findByIdAndDelete({ _id: req.body._id })
            res.status(200).json(data)
        } catch (e) {
            res.status(500).send({
                message: 'Internal Server Error'
            })
            next(e)
        }
    },
    activate: async (req, res, next) => {
        try {
            const data = await models.Article.findByIdAndUpdate({ _id: req.body._id }, { status: 1 })
            res.status(200).json(data)
        } catch (e) {
            res.status(500).send({
                message: 'Internal Server Error'
            })
            next(e)
        }
    },
    deactivate: async (req, res, next) => {
        try {
            const data = await models.Article.findByIdAndUpdate({ _id: req.body._id }, { status: 0 })
            res.status(200).json(data)
        } catch (e) {
            res.status(500).send({
                message: 'Internal Server Error'
            })
            next(e)
        }
    },
}