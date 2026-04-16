import { Request, Response } from 'express';
import { ExternalService } from './ExternalService';
import { AppDataSource } from "../config/database";
import { UserEntity } from '../entities/User.entity'; 

const service = new ExternalService();


export const getExternalData = async (req: Request, res: Response) => {
  try {
    const data = await service.getUsers();

    
    if (!AppDataSource.isInitialized) {
        await AppDataSource.initialize();
    }
    

    const userRepository = AppDataSource.getRepository(UserEntity);
    
    await userRepository.save(data); 

    res.json({
      message: "Datos procesados y guardados en SQLite",
      total: data.length,
      data: data
    });

  } catch (error) {
    console.error("Error en el controlador:", error);
    res.status(500).json({ error: 'Error al procesar o guardar datos' });
  }
};