"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResourceController = void 0;
const resource_service_1 = require("../services/resource.service");
class ResourceController {
    static create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const resource = yield resource_service_1.ResourceService.create(req.body);
                res.status(201).json(resource); // No return statement
            }
            catch (error) {
                res.status(500).json({ message: error.message });
            }
        });
    }
    static list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const type = req.query.type;
                if (type && typeof type !== "string") {
                    res.status(400).json({ message: "Invalid type parameter" });
                }
                const resources = yield resource_service_1.ResourceService.list(type);
                res.json(resources);
            }
            catch (error) {
                res.status(500).json({ message: error.message });
            }
        });
    }
    static get(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const resource = yield resource_service_1.ResourceService.get(req.params.id);
                if (!resource) {
                    res.status(404).json({ message: "Not found" });
                    return;
                }
                res.json(resource);
            }
            catch (error) {
                res.status(500).json({ message: error.message });
            }
        });
    }
    static update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const updatedResource = yield resource_service_1.ResourceService.update(req.params.id, req.body);
                res.json(updatedResource);
            }
            catch (error) {
                res.status(500).json({ message: error.message });
            }
        });
    }
    static delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield resource_service_1.ResourceService.delete(req.params.id);
                res.status(204).send();
            }
            catch (error) {
                res.status(500).json({ message: error.message });
            }
        });
    }
}
exports.ResourceController = ResourceController;
