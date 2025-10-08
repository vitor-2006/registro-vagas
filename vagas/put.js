import { Vaga } from "./schema.js"

export const updateVaga = async (id, titulo, stack, nivel) => {
    try {
        const updatedVaga = await Vaga.findByIdAndUpdate(
            id,
            { titulo, stack, nivel },
            { new:true, runValidators:true }
        )
        return updatedVaga
    } catch (error) {
        console.error('Erro ao atualizar Vaga:', error.message)
        throw error
    }
}