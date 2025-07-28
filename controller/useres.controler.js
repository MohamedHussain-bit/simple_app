import User from '../model/user.model.js'
import status from '../utils/httpStatus.js'


const getAllUseres = async (req , res) => {
    const query = req.query

    const limit = query.limit || 10
    const page = query.page || 1
    const skip = (page - 1) * limit

    const users = await User.find({} , {"__v" : false}).limit(limit).skip(skip)
    res.json({status : status.SUCCESS , data : {users}})
}

const register = () => {}

const login = () => {}

const useresController = {
    getAllUseres,
    register,
    login
}
export default useresController