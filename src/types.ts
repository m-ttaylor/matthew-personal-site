export type CreateRecipeRequest = Omit<Recipe, "_id">;

export type EditRecipeRequest = {}

export type Recipe = {
  name: string;
  description: string | undefined;
  tags: string;
  ingredients: string;
  instructions: string;
  notes: string | undefined;
  category: string;
  _id: string;
};