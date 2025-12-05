import { getClientes, createCliente, updateCliente, deleteCliente } from "../models/postModel.js";
import { getPedidos, createPedido, updatePedido, deletePedido } from "../models/postModel.js";
import { getItensPedido, createItemPedido, updateItemPedido, deleteItemPedido } from "../models/postModel.js";



export const controllerGetClientes = async (req, res) => {
  try {
    const clientes = await getClientes();
    res.status(200).json(clientes);
  } catch (erro) {
    console.error(erro);
    res.status(500).json({ erro: "Falha ao obter clientes." });
  }
}

export const controllerPostCliente = async (req, res) => {
  const postReq = req.body;
  
  try {
    const postCriado = await createCliente(postReq); 

    res.status(200).json(postCriado); 
  } catch (erro) {
    console.log(erro.message);
    res.status(500).json({ erro: "Falha ao criar cliente." });
  }
};


export const controllerUpdateCliente = async (req, res) => {
  try {
    const id = req.params.id;
    const { nome, email, cpf } = req.body;

    const dadosAtualizados = {};
    if (nome) dadosAtualizados.nome = nome;
    if (email) dadosAtualizados.email = email;
    if (cpf) dadosAtualizados.cpf = cpf;

    const resultado = await updateCliente(id, dadosAtualizados);

    if (resultado.affectedRows === 0) {
      return res.status(404).json({ erro: "Cliente não encontrado" });
    }

    res.status(200).json({ mensagem: "Cliente atualizado com sucesso!" });

  } catch (erro) {
    console.error(erro);
    res.status(500).json({ erro: "Erro ao atualizar cliente" });
  }
};


export const controllerDeleteCliente = async (req, res) => {
  try {
    const id = req.params.id;

   
    const resultado = await deleteCliente(id);

    if (resultado.affectedRows === 0) {
      return res.status(404).json({ erro: "Cliente não encontrado." });
    }

    res.status(200).json({ mensagem: "Cliente deletado com sucesso!" });

  } catch (erro) {
    console.error(erro.message);
    res.status(500).json({ erro: "Falha ao deletar o cliente." });
  }
};


export const controllerGetPedidos = async (req, res) => {
  try {
    const pedidos = await getPedidos();
    res.status(200).json(pedidos);
  } catch (erro) {
    console.error(erro);
    res.status(500).json({ erro: "Falha ao obter pedidos." });
  }
};


export const controllerPostPedido = async (req, res) => {
  const pedidoReq = req.body;
  try {
    const pedidoCriado = await createPedido(pedidoReq);
    res.status(200).json(pedidoCriado);
  } catch (erro) {
    console.log(erro.message);
    res.status(500).json({ erro: "Falha ao criar pedido." });
  }
};


export const controllerUpdatePedido = async (req, res) => {
  try {
    const id = req.params.id;
    const { status, data_pedido, id_cliente } = req.body;

    const dadosAtualizados = {};
    if (status) dadosAtualizados.status = status;
    if (data_pedido) dadosAtualizados.data_pedido = data_pedido;
    if (id_cliente) dadosAtualizados.id_cliente = id_cliente;

    const resultado = await updatePedido(id, dadosAtualizados);

    if (resultado.affectedRows === 0) {
      return res.status(404).json({ erro: "Pedido não encontrado" });
    }

    res.status(200).json({ mensagem: "Pedido atualizado com sucesso!" });

  } catch (erro) {
    console.error(erro);
    res.status(500).json({ erro: "Erro ao atualizar pedido" });
  }
};


export const controllerDeletePedido = async (req, res) => {
  try {
    const id = req.params.id;

  
    const resultado = await deletePedido(id);

    if (resultado.affectedRows === 0) {
      return res.status(404).json({ erro: "Pedido não encontrado." });
    }

    res.status(200).json({ mensagem: "Pedido deletado com sucesso!" });

  } catch (erro) {
    console.error(erro.message);
    res.status(500).json({ erro: "Falha ao deletar o pedido." });
  }
};


export const controllerGetItensPedido = async (req, res) => {
  try {
    const itensPedido = await getItensPedido();
    res.status(200).json(itensPedido);
  } catch (erro) {
    console.error(erro);
    res.status(500).json({ erro: "Falha ao obter itens do pedido." });
  }
};


export const controllerPostItemPedido = async (req, res) => {
  const itemPedidoReq = req.body;
  try {
    const itemPedidoCriado = await createItemPedido(itemPedidoReq);
    res.status(200).json(itemPedidoCriado);
  } catch (erro) {
    console.log(erro.message);
    res.status(500).json({ erro: "Falha ao criar item de pedido." });
  }
};


export const controllerUpdateItemPedido = async (req, res) => {
  try {
    const id = req.params.id;
    const { preco_unitario, quantidade, id_pedido, id_jogo } = req.body;

    const dadosAtualizados = {};
    if (preco_unitario) dadosAtualizados.preco_unitario = preco_unitario;
    if (quantidade) dadosAtualizados.quantidade = quantidade;
    if (id_pedido) dadosAtualizados.id_pedido = id_pedido;
    if (id_jogo) dadosAtualizados.id_jogo = id_jogo;

    const resultado = await updateItemPedido(id, dadosAtualizados);

    if (resultado.affectedRows === 0) {
      return res.status(404).json({ erro: "Item de pedido não encontrado" });
    }

    res.status(200).json({ mensagem: "Item de pedido atualizado com sucesso!" });

  } catch (erro) {
    console.error(erro);
    res.status(500).json({ erro: "Erro ao atualizar item de pedido" });
  }
};


export const controllerDeleteItemPedido = async (req, res) => {
  try {
    const id = req.params.id;
    
    const resultado = await deleteItemPedido(id);

    if (resultado.affectedRows === 0) {
      return res.status(404).json({ erro: "Item de pedido não encontrado." });
    }

    res.status(200).json({ mensagem: "Item de pedido deletado com sucesso!" });

  } catch (erro) {
    console.error(erro.message);
    res.status(500).json({ erro: "Falha ao deletar o item de pedido." });
  }
};
