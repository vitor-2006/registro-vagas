import { Vaga } from "./schema.js"

export const getVaga = async () => {
    try {
        return await Vaga.find()
    } catch (error) {
        console.log('erro ao buscar as Vagas', error.message)
        throw error
    }
}