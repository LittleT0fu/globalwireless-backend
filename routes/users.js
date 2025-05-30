var express = require("express");
var router = express.Router();
const permissionMiddleware = require("../middleware/permissionMiddleware");
const { authMiddleware } = require("../middleware/authMiddleware");
const { checkPermission } = require("../middleware/permissionMiddleware");

const userController = require("../controllers/userController");

/* GET users listing. */
router.get(
    "/",
    authMiddleware,
    checkPermission("get_user"),
    userController.getAllUsers
);

router.post(
    "/",
    authMiddleware,
    checkPermission("create_user"),
    userController.createUser
);

router.patch(
    "/:id",
    authMiddleware,
    checkPermission("edit_user"),
    userController.updateUser
);

router.delete(
    "/:id",
    authMiddleware,
    checkPermission("delete_user"),
    userController.deleteUser
);

router.post("/login", userController.login);

router.post("/register", userController.createUserPublic);

router.get("/me", authMiddleware, userController.getProfile);

module.exports = router;
