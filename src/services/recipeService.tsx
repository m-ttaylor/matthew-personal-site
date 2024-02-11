import { Recipe } from "@/types";
import { recipes } from "./recipes";

const getRecipe = async (id: string | null) => {

  const result = recipes.find(r => r._id === id);
  if (result === undefined) {
    throw Error("foo");
  }
  const recipe: Recipe = result
  return recipe;
}

const getRecipes = async () => {

  const result: Recipe[] = recipes;

  return result;
}

const exports = { getRecipes, getRecipe }
export default exports;
