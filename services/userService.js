const userModel = require("../models/userModel")

const addUserService = async (data) => {
    try {
        await userModel.create(data)
        return true
    }
    catch (error) {
        return false
    }

}

const getUserService = async (id) => {
    try {
        const getUser=await userModel.findOne({_id:id},{name:1,image:1,summery:1})
        return getUser ? getUser : false
    }
    catch (error) {
        return false
    }

}
const getAllUserService = async () => {
    try {
        const getUser=await userModel.find({},{name:1,image:1,summery:1})
        return getUser ? getUser : false
    }
    catch (error) {
        return false
    }

}
const updateUserService = async (id,data) => {
    try {
        const getUser=await userModel.findOne({_id:id},{name:1,image:1,summery:1})
        if(getUser){
            await userModel.updateOne({_id:id},{$set:data})
            return true
        }
        return false
    }
    catch (error) {
        return false
    }

}

const deleteUserService = async (id,data) => {
    try {
        const getUser=await userModel.findOne({_id:id},{name:1,image:1,summery:1})
        if(getUser){
            await userModel.deleteOne({_id:id})
            return true
        }
        return false
    }
    catch (error) {
        return false
    }

}


module.exports = {
    addUserService,
    getUserService,
    getAllUserService,
    updateUserService,
    deleteUserService
}