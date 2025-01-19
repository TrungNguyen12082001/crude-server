"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const resource_controller_1 = require("../controllers/resource.controller");
const router = express_1.default.Router();
router.post("/", resource_controller_1.ResourceController.create);
router.get("/", resource_controller_1.ResourceController.list);
router.get("/:id", resource_controller_1.ResourceController.get);
router.put("/:id", resource_controller_1.ResourceController.update);
router.delete("/:id", resource_controller_1.ResourceController.delete);
exports.default = router;
