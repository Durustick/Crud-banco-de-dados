import conectarAoBanco from '../../src/config/dbConfig.js';

export const getClientes = async () => {
  const conexao = await conectarAoBanco();

  try {
    const [resultados] = await conexao.execute('SELECT * FROM Clientes');
    return resultados;  
  } catch (erro) {
    console.error("Erro ao buscar clientes:", erro.message);  
    throw new Error("Falha ao obter clientes :( )."); 
  }
};



export const createCliente = async (novoCliente) => {
  const conexao = await conectarAoBanco();
  const { nome, email, cpf } = novoCliente; 
  const [resultados] = await conexao.execute(
    'INSERT INTO Clientes (nome, email, cpf) VALUES (?, ?, ?)', 
    [nome, email, cpf]
  );
  return resultados;
}


export const updateCliente = async (id, dados) => {
  const conexao = await conectarAoBanco();
  const { nome, email, cpf } = dados; 
  const [resultados] = await conexao.execute(
    'UPDATE Clientes SET nome = ?, email = ?, cpf = ? WHERE id = ?', 
    [nome, email, cpf, id]
  );
  return resultados;
}


export const deleteCliente = async (id) => {
  const conexao = await conectarAoBanco();
  const [resultados] = await conexao.execute(
    'DELETE FROM Clientes WHERE id = ?', 
    [id]
  );
  return resultados;
}


//PEDIDOS
export const getPedidos = async () => {
  const conexao = await conectarAoBanco();
  const [resultados] = await conexao.execute('SELECT * FROM Pedidos');
  return resultados;
}


export const createPedido = async (novoPedido) => {
  const conexao = await conectarAoBanco();
  const { status, data_pedido, id_cliente } = novoPedido; 
  const [resultados] = await conexao.execute(
    'INSERT INTO Pedidos (status, data_pedido, id_cliente) VALUES (?, ?, ?)', 
    [status, data_pedido, id_cliente]
  );
  return resultados;
}


export const updatePedido = async (id, dados) => {
  const conexao = await conectarAoBanco();
  const { status, data_pedido, id_cliente } = dados; 
  const [resultados] = await conexao.execute(
    'UPDATE Pedidos SET status = ?, data_pedido = ?, id_cliente = ? WHERE id = ?', 
    [status, data_pedido, id_cliente, id]
  );
  return resultados;
}

export const deletePedido = async (id) => {
  const conexao = await conectarAoBanco();
  const [resultados] = await conexao.execute(
    'DELETE FROM Pedidos WHERE id = ?', 
    [id]
  );
  return resultados;
}


//ITENS PEDIDO
export const getItensPedido = async () => {
  const conexao = await conectarAoBanco();
  const [resultados] = await conexao.execute('SELECT * FROM Itens_Pedido');
  return resultados;
}


export const createItemPedido = async (novoItem) => {
  const conexao = await conectarAoBanco();
  const { preco_unitario, quantidade, id_pedido, id_jogo } = novoItem; 
  const [resultados] = await conexao.execute(
    'INSERT INTO Itens_Pedido (preco_unitario, quantidade, id_pedido, id_jogo) VALUES (?, ?, ?, ?)', 
    [preco_unitario, quantidade, id_pedido, id_jogo]
  );
  return resultados;
}


export const updateItemPedido = async (id, dados) => {
  const conexao = await conectarAoBanco();
  const { preco_unitario, quantidade, id_pedido, id_jogo } = dados; 
  const [resultados] = await conexao.execute(
    'UPDATE Itens_Pedido SET preco_unitario = ?, quantidade = ?, id_pedido = ?, id_jogo = ? WHERE id = ?', 
    [preco_unitario, quantidade, id_pedido, id_jogo, id]
  );
  return resultados;
}


export const deleteItemPedido = async (id) => {
  const conexao = await conectarAoBanco();
  const [resultados] = await conexao.execute(
    'DELETE FROM Itens_Pedido WHERE id = ?', 
    [id]
  );
  return resultados;
};
