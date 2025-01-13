import express from "express";
import petRouter from "../routes/petRouter";
import adotanteRouter from "./adopterRouter";

const router = (app: express.Router) => {
    app.use("/pet", petRouter);
    app.use("/adotantes", adotanteRouter);
};

export default router;
