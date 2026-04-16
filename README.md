# Prueba Técnica Backend Junior - Consumo de API y Persistencia

##  Descripción
Esta es una API REST desarrollada con **Node.js** y **TypeScript**. El proyecto consume datos de una API externa, realiza una transformación de la información y los persiste en una base de datos local utilizando **TypeORM**.

Se aplicó una arquitectura modular separando las responsabilidades en:
- **Controllers**: Manejo de peticiones HTTP.
- **Services**: Lógica de negocio y consumo de APIs externas.
- **Entities**: Definición de modelos de datos.
- **Config**: Configuración de la base de datos y DataSource.

##  Tecnologías utilizadas
- **Node.js** (Runtime)
- **Express** (Framework web)
- **TypeScript** (Lenguaje)
- **TypeORM** (ORM para persistencia)
- **SQLite** (Base de datos portable)
- **Axios** (Cliente HTTP)

##  Instalación y Ejecución Local

1. Clona el repositorio.
2. Instala las dependencias:
   ```bash
   npm install

   Ejecuta el proyecto en modo desarrollo:
   npm run dev
   Prueba el endpoint principal:
GET http://localhost:3000/external-data

 Respuestas sobre Azure
1. ¿Cómo desplegarías esta API en Azure?
Utilizaría Azure App Service, configurando el despliegue continuo (CI/CD) directamente desde este repositorio de GitHub mediante GitHub Actions.

2. ¿Cómo manejarías las variables de entorno?
Las configuraría en el panel de Configuration > Application Settings de Azure App Service, asegurando que datos como el puerto o URLs de APIs externas no queden expuestos en el código fuente.

3. ¿Cómo manejarías la carga de archivos y seguridad?
Usaría Azure Blob Storage para el almacenamiento. Para el acceso seguro, implementaría SAS Tokens (Shared Access Signatures), permitiendo que los usuarios accedan a archivos mediante URLs temporales con tiempo de expiración limitado.


2. Una vez pegado, dale al botón verde que dice **"Commit changes..."** arriba a la derecha.
3. saldrá una ventanita pequeña, confirma dándole otra vez al botón verde **"Commit changes"**.


