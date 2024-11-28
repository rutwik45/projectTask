const { addUserController, getUserController, getAllUserController, updateUserController, deleteUserController } = require("../controller/userController")

const route=require("express").Router()

route.get("/:id",getUserController)

route.get("/",getAllUserController)

route.post("/addUser",addUserController)

route.put("/updateUser/:id",updateUserController)

route.delete("/deleteUser/:id",deleteUserController)

module.exports=route