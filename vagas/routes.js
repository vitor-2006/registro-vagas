import express from 'express'
import { getVaga } from './get.js'
import { createVaga } from './post.js';
import { updateVaga } from "./put.js"
import { deleteVaga } from './delete.js';
import { pesqPorStack, pesqPorNivel } from './pesquisa.js'

const routesVaga  = express.Router();

routesVaga.get('/vaga', async (req, res) => {
    const Vagas = await getVaga()
    if(Vagas) {
        return res.status(200).send(Vagas)
    } else {
        return res.status(404).send({ message: 'não têm Vagas registradas' })
    }
});

routesVaga.post('/vaga', async (req, res) => {
    const { titulo, stack, nivel } = req.body
    const newVaga = await createVaga(titulo, stack, nivel)
    if(!newVaga) {
        return res.status(400).send("Vaga inválida!")
    }
    return res.status(201).send({ message: 'Vaga criada com sucesso', vaga: newVaga })
});

routesVaga.put('/vaga/:id', async (req, res) => {
    const { id } = req.params
    const { titulo, stack, nivel } = req.body
    const updatedVaga = await updateVaga(id, titulo, stack, nivel)
    if(updatedVaga) {
        return res.status(200).send({ message: 'Vaga atualizada com sucesso', vaga: updatedVaga })
    } else {
        return res.status(404).send({ message: 'Vaga não encontrada ou inválida' })
    }
});

routesVaga.delete('/vaga/:id', async (req, res) => {
    const { id } = req.params
    const deletedVaga = deleteVaga(id)
    if(deletedVaga) {
        return res.status(200).send({ message:'vaga deletada com sucesso', Vaga: deletedVaga })
    } else {
        return res.status(404).send({ message: 'vaga não encontrada' })
    }
});

routesVaga.get('/vaga/search', async (req, res) => {
    const { stack, nivel } = req.query
    let searchVaga 
    if(stack) {
        searchVaga = await pesqPorStack(stack)
    } else if(nivel) {
        searchVaga = await pesqPorNivel(nivel)
    }
    if(searchVaga) {
        return res.status(200).send(searchVaga)
    } else {
        return res.status(404).send({ message: 'Vaga não encontrada' })
    }
})

export {routesVaga}