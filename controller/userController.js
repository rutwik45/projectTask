const { sendResponse, errorHandler } = require("../helper/commonFunction")
const { addUserService, getUserService, getAllUserService, updateUserService, deleteUserService } = require("../services/userService")

const addUserController = async (req, res) => {
    try {
        const { name, image, summery } = req.body
        let createData = {
            name,
            image: image,
            summery
        }
        let createUser = await addUserService(createData)
        if (createUser) {
            return sendResponse(res, true, 200, 'User Created Successfully');
        }
        return sendResponse(res, false, 200, 'User Creation Fail');
    } catch (error) {
        return errorHandler(error, res);
    }
}

const getUserController = async (req, res) => {
    try {
        const { id } = req.params
        let getUser = await getUserService(id)
        if (getUser) {
            return sendResponse(res, true, 200, 'User Fetch Successfully',getUser);
        }
        return sendResponse(res, false, 400, 'User Not Found');
    } catch (error) {
        return errorHandler(error, res);
    }
}
const getAllUserController = async (req, res) => {
    try {
        let getUser = await getAllUserService()
        if (getUser) {
            return sendResponse(res, true, 200, 'User Fetch Successfully',getUser);
        }
        return sendResponse(res, false, 400, 'User Not Found');
    } catch (error) {
        return errorHandler(error, res);
    }
}
const updateUserController = async (req, res) => {
    try {
        const{id}=req.params
        let getUser = await updateUserService(id,req.body)
        if (getUser) {
            return sendResponse(res, true, 200, 'User Update Successfully');
        }
        return sendResponse(res, false, 400, 'User Not Found');
    } catch (error) {
        return errorHandler(error, res);
    }
}

const deleteUserController = async (req, res) => {
    try {
        const { id } = req.params
        let getUser = await deleteUserService(id)
        if (getUser) {
            return sendResponse(res, true, 200, 'User Delete Successfully');
        }
        return sendResponse(res, false, 400, 'User Not Found');
    } catch (error) {
        return errorHandler(error, res);
    }
}

module.exports = {
    addUserController,
    getUserController,
    getAllUserController,
    updateUserController,
    deleteUserController
}