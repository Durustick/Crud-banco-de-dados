import 'dotenv/config';
import express from "express";
import getPostRoutes from "./src/routes/postRoutes.js";
import cors from "cors";
import conectarAoBanco from './src/config/dbConfig.js'; 

const corsOptions = {
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  optionsSuccessStatus: 200
};

const app = express();
app.use(express.json()); 
app.use(cors(corsOptions)); 


conectarAoBanco()
  .then(() => {
    console.log("Conectado ao banco de dados com sucesso!");

    
    getPostRoutes(app);

    
    app.listen(3000, () => {
      console.log("Servidor escutando na porta 3000...");
    });
  })
  .catch((erro) => {
    console.error("Erro ao conectar ao banco de dados:", erro);
    process.exit(1);  
  });
