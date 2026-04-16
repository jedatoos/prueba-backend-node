import "reflect-metadata";
import express from 'express';
import { AppDataSource } from "./config/database";
import { getExternalData } from "./modules/ExternalController";

const app = express();
const PORT = 3000;

app.use(express.json());

// Ruta solicitada
app.get('/external-data', getExternalData);

// Inicialización de TypeORM
AppDataSource.initialize()
    .then(() => {
        console.log("✅ Base de Datos conectada con TypeORM");
        app.listen(PORT, () => {
            console.log(`🚀 Servidor listo en http://localhost:${PORT}/external-data`);
        });
    })
    .catch((error) => console.log("❌ Error en DB: ", error));