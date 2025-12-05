import mysql from 'mysql2/promise';

export default async function conectarAoBanco() {
  try {
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME
    });
    console.log("Conexão ao banco de dados estabelecida com sucesso!");
    return connection;
  } catch (erro) {
    console.error("Erro ao conectar ao banco de dados:", erro); 
    throw new Error("Erro ao conectar ao banco de dados: " + erro.message);
  }
}
