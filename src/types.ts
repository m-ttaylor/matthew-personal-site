export type CreateRecipeRequest = Omit<Recipe, "_id">;

export type EditRecipeRequest = {}

export type Recipe = {
  name: string;
  description: string | null;
  tags: string;
  ingredients: string;
  instructions: string;
  notes: string | null;
  category: string;
  _id: string;
};