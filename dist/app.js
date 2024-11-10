"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const userscontroller_1 = __importDefault(require("./controllers/userscontroller"));
const admin_1 = __importDefault(require("./controllers/admin"));
const candidates_1 = __importDefault(require("./controllers/candidates"));
const votes_1 = __importDefault(require("./controllers/votes"));
const db_1 = require("./config/db");
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
(0, db_1.conectToMongo)();
app.use(express_1.default.json());
app.use("/api/users", userscontroller_1.default);
app.use('/api/admin', admin_1.default);
app.use('/api/votes', votes_1.default);
app.use("/api/candidates", candidates_1.default);
app.listen(PORT, () => {
    console.log(`the server running on port ${PORT}`);
});
