const express = require('express');
const app = express();

app.use(express.json());

cliId = 2;
const cliente = [{
    cliId: "0",
    cliNome: "Pedro",
    cliEndereço: "Rua Nova, 123",
    cliCidade: "São Paulo - SP"
},
{
    cliId: "1",
    cliNome: "Lucas",
    cliEndereço: "Estrada Velha, 321",
    cliCidade: "Minas Gerais - MG"
},
{
    cliId: "2",
    cliNome: "João",
    cliEndereço: "Estrada das Capivaras, 4489",
    cliCidade: "Belo Horizonte - MG"
}];


//retorna um exemplo
app.get('/clientes/:index', (req, res) => {
    const { index } = req.params;

    return res.json(cliente[index]);
});

//retorna todos os exemplos
app.get('/clientes', (req, res) => {
    return res.json(cliente);
});

//cria um exemplo
app.post('/clientes', (req, res) => {
    cliId++;
    const { cliNome } = req.body;
    const { cliEndereço } = req.body;
    const { cliCidade } = req.body;

    cliente[cliId] = { cliId: cliId, cliNome, cliEndereço, cliCidade };

    return res.json(cliente[cliId]);
});

// atualizar um exemplo
app.put('/clientes/:index', (req, res) => {
    const { index } = req.params;
    const { cliId } = req.body;
    const { cliNome } = req.body;
    const { cliEndereço } = req.body;
    const { cliCidade } = req.body;

    cliente[index] = { cliId, cliNome, cliEndereço, cliCidade };
    return res.json(cliente);
});

// deletar um exemplo
app.delete('/clientes/:index', (req, res) => {
    const { index } = req.params;

    cliente.splice(index, 1);
    return res.json({ messege: "Cliente foi excluído." });
});

app.listen(3000, () => {
    console.log('Servidor conectado na porta 3000')
});