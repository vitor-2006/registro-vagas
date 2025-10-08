import { Vaga } from "./schema.js"

export const createVaga = async (titulo, stack, nivel) => {
    try {
        const newVaga = new Vaga({ titulo, stack, nivel })
        return await newVaga.save()
    } catch (error) {
        console.error('Erro ao criar Vaga', error.message)
        throw error
    }
}