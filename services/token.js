import jwt from 'jsonwebtoken'
import models from '../models'
const key = 'allfor1'

async function checkToken(token) {
    let fiterId = null
    try {
        const {_id} = await jwt.decode(token)
        fiterId = _id
    } catch(e) {
        return false
    }

    const user = await models.Users.findOne({_id: fiterId, status: 1})
    if (user) {
        const token = jwt.sign({_id: fiterId}, key, {expiresIn: 'ih'})
        return { token, role:user.role }
    } else {
        return false
    }
}

export default {
    encode: async (_id) => {
        const token = jwt.sign({_id}, key, {expiresIn: '1h'})
        return token;
    },

    decode: async (token) => {
        try {
            const {_id} = await jwt.verify(token, key)
            const user = await models.Users.findOne({_id, status: 1})
            if (user) {
                return user
            } else {
                return false
            }
        } catch (e) {
            const newtoken = await checkToken(token)
            return newtoken
        }
    }
}