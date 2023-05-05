import models from "../models"

export default {
    add: async (req, res, next) => {
        try {
            const data = await models.Categories.create(req.body)
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
            const data = await models.Categories.findOne({ _id: req.query._id })
            if (!data){
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
            const data = await models.Categories.find({})
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
            const data = await models.Categories.findByIdAndUpdate({ _id: req.body._id }, { name: req.body.name, description: req.body.description })
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
            const data = await models.Categories.findByIdAndDelete({ _id: req.body._id })
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
            const data = await models.Categories.findByIdAndUpdate({ _id: req.body._id }, { status: 1})
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
            const data = await models.Categories.findByIdAndUpdate({ _id: req.body._id }, { status: 0})
            res.status(200).json(data)
        } catch (e) {
            res.status(500).send({
                message: 'Internal Server Error'
            })
            next(e)
        }
    },
}