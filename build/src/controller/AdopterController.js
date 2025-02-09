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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var AdopterEntity_1 = __importDefault(require("../entities/AdopterEntity"));
var address_1 = __importDefault(require("../entities/address"));
var AdopterController = /** @class */ (function () {
    function AdopterController(repository) {
        this.repository = repository;
    }
    AdopterController.prototype.createAdopter = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, name_1, password, phone, photo, address, newAddress, novoAdopter, error_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        _a = req.body, name_1 = _a.name, password = _a.password, phone = _a.phone, photo = _a.photo, address = _a.address;
                        if (!name_1 || !password || !phone || !address || !address.city || !address.state) {
                            res.status(400).json({ message: "Missing required fields" });
                            return [2 /*return*/];
                        }
                        newAddress = new address_1.default(address.city, address.state);
                        novoAdopter = new AdopterEntity_1.default(name_1, password, phone, address, photo);
                        return [4 /*yield*/, this.repository.createAdopter(novoAdopter)];
                    case 1:
                        _b.sent();
                        res.status(201).json(novoAdopter);
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _b.sent();
                        next(error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ;
    AdopterController.prototype.updateAdopter = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var id, _a, success, message, error_2;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        id = req.params.id;
                        if (!id || isNaN(Number(id))) {
                            res.status(400).json({ error: 'Invalid ID' });
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.repository.updateAdopter(Number(id), req.body)];
                    case 1:
                        _a = _b.sent(), success = _a.success, message = _a.message;
                        if (!success) {
                            res.status(404).json({ error: message });
                            return [2 /*return*/];
                        }
                        res.sendStatus(204);
                        return [3 /*break*/, 3];
                    case 2:
                        error_2 = _b.sent();
                        next(error_2);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ;
    AdopterController.prototype.listAdopters = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var listOfAdopters;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.repository.listAdopters()];
                    case 1:
                        listOfAdopters = _a.sent();
                        res.json(listOfAdopters);
                        return [2 /*return*/];
                }
            });
        });
    };
    ;
    AdopterController.prototype.deleteAdopter = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var id, _a, success, message, error_3;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        id = req.params.id;
                        if (!id || isNaN(Number(id))) {
                            res.status(400).json({ error: 'Invalid ID' });
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.repository.deleteAdopter(Number(id))];
                    case 1:
                        _a = _b.sent(), success = _a.success, message = _a.message;
                        if (!success) {
                            res.status(404).json({ error: message });
                            return [2 /*return*/];
                        }
                        res.sendStatus(204);
                        return [3 /*break*/, 3];
                    case 2:
                        error_3 = _b.sent();
                        next(error_3);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ;
    AdopterController.prototype.updateAdopterAddress = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var id, _a, success, message, error_4;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        id = req.params.id;
                        if (!id || isNaN(Number(id))) {
                            res.status(400).json({ error: 'Invalid ID' });
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.repository.updateAdopterAddress(Number(id), req.body)];
                    case 1:
                        _a = _b.sent(), success = _a.success, message = _a.message;
                        if (!success) {
                            res.status(404).json({ error: message });
                            return [2 /*return*/];
                        }
                        res.sendStatus(204);
                        return [2 /*return*/];
                    case 2:
                        error_4 = _b.sent();
                        next(error_4);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return AdopterController;
}());
exports.default = AdopterController;
;
