import models from "../models"
import bcrypt from 'bcryptjs'
import token from "../services/token"

export default {
    add: async (req, res, next) => {
        try {
            req.body.password = await bcrypt.hash(req.body.password, 10)
            const data = await models.Users.create(req.body)
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
            const data = await models.Users.findOne({ _id: req.query._id })
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
            const data = await models.Users.find({ $or: [{ 'useranme': new RegExp(filter, 'i') }, { 'email': new RegExp(filter, 'i') }] }, { createdAt: 0 })
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
            let password = req.body.password
            const filter = await models.Users.findOne({ _id: req.body._id })
            if (password != filter.password) {
                req.body.password = await bcrypt.hash(req.body.password, 10)
            }

            const data = await models.Users.findByIdAndUpdate({ _id: req.body._id }, {
                role: req.body.role,
                useranme: req.body.name,
                email: req.body.email,
                type: req.body.type,
                address: req.body.address,
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
            const data = await models.Users.findByIdAndDelete({ _id: req.body._id })
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
            const data = await models.Users.findByIdAndUpdate({ _id: req.body._id }, { status: 1 })
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
            const data = await models.Users.findByIdAndUpdate({ _id: req.body._id }, { status: 0 })
            res.status(200).json(data)
        } catch (e) {
            res.status(500).send({
                message: 'Internal Server Error'
            })
            next(e)
        }
    },

    login: async (req, res, next) => {
        try {
            let user = await models.Users.findOne({email: req.body.email, status: 1})
            if (user) {
                let match = await bcrypt.compare(req.body.password, user.password);
                if (match){
                    let tokenReturn = await token.encode(user._id)
                    res.status(200).json({user, tokenReturn})
                } else{
                    res.status(404).send({
                        message: 'Password Incorrecto'
                    });
                }
            } else {
                res.status(404).send({
                    message: 'no data user'
                })
            }

        } catch (e) {
            res.status(500).send({
                message: 'Internal Server Error'
            })
        }
    }
}