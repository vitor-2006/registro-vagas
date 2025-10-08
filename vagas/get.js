import { Vaga } from "./schema.js"

export const getVaga = async (req, res) => {
    try {
        return await Vaga.find()
    } catch (error) {
        console.log('erro ao buscar as Vagas', error.message)
        throw error
    }
}