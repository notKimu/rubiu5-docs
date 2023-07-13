import { error } from "@sveltejs/kit";
import { commands } from "../../assets/database/commands.js";
import type { commandDto } from "$lib/dto";

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
  const category: string = params.category;
  const commandList: commandDto[] = commands[category];

  console.log(commandList);
  if (commandList !== undefined) {
    return {commands: commandList};
  }

  return {
    status: 404,
    error: "Command category not found"
  };
}
