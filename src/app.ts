import express, { Response } from "express";
import router from "./routes";
import "reflect-metadata";
import { AppDataSource } from "./config/dataSource";

const app = express();
app.use(express.json());
router(app);

AppDataSource.initialize()
.then(() => console.log("successo ao conectar ao Banco de Dados."))
.catch((error) => console.error("Erro ao conectar ao Banco de Dados:", error));

export default app;