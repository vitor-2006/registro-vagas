import { Vaga } from "./schema.js";

function escapeRegex(text) {
  return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
}

export const pesqPorStack = async (stack) => {
    try {
      const safeStack = escapeRegex(stack);
      return await Vaga.find({ stack: { $regex: safeStack, $options: "i" } }).exec();
    } catch (error) {
      console.error('Erro ao pesquisar Vaga', error.message);
      throw error;
    }
}

export const pesqPorNivel = async (nivel) => {
    try {
      const safeNivel = escapeRegex(nivel);
      return await Vaga.find({ nivel: { $regex: safeNivel, $options: "i" } }).exec();
    } catch (error) {
      console.error('Erro ao pesquisar Vaga', error.message);
      throw error;
    }
}