import { Vaga } from "./schema.js"

export const deleteVaga = async (id) => {
    try {
        return await Vaga.findByIdAndDelete(id)
    } catch (error) {
        console.error('Erro ao deletar Vaga:', error.message)
        throw error
    }
}