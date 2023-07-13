import nivel from "./nivel.json";
import matrimonio from "./marriage.json";
import roleo from "./roleo.json";
import perfil from "./perfil.json";
import sugerencias from "./sugerencias.json";
import type { commandDto } from "$lib/dto";

const nivelData: commandDto[] = nivel;
const matrimonioData: commandDto[] = matrimonio;
const roleoData: commandDto[] = roleo;
const perfilData: commandDto[] = perfil;
const sugerenciasData: commandDto[] = sugerencias;

interface Commands {
    [key: string]: commandDto[];
  }

export const commands: Commands = {
  "nivel": nivelData,
  "matrimonio": matrimonioData,
  "roleo": roleoData,
  "perfil": perfilData,
  "sugerencias": sugerenciasData,
};
