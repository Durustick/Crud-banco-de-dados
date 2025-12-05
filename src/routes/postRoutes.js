import {
  controllerGetClientes,
  controllerPostCliente,
  controllerUpdateCliente,
  controllerDeleteCliente,
  controllerGetPedidos,
  controllerPostPedido,
  controllerUpdatePedido,
  controllerDeletePedido,
  controllerGetItensPedido,
  controllerPostItemPedido,
  controllerUpdateItemPedido,
  controllerDeleteItemPedido
} from "../controllers/postController.js";  

const getPostRoutes = (app) => {
  // Rotas para Clientes
  app.get("/clientes", controllerGetClientes);               
  app.post("/clientes", controllerPostCliente);              
  app.put("/clientes/:id", controllerUpdateCliente);        
  app.delete("/clientes/:id", controllerDeleteCliente);    

  // Rotas para Pedidos
  app.get("/pedidos", controllerGetPedidos);                
  app.post("/pedidos", controllerPostPedido);                
  app.put("/pedidos/:id", controllerUpdatePedido);           
  app.delete("/pedidos/:id", controllerDeletePedido);      

 
  app.get("/itens-pedido", controllerGetItensPedido);        
  app.post("/itens-pedido", controllerPostItemPedido);      
  app.put("/itens-pedido/:id", controllerUpdateItemPedido);  
  app.delete("/itens-pedido/:id", controllerDeleteItemPedido); 
}

export default getPostRoutes;
