import { Recipe } from "@/types";

const recipes: Recipe[] = [
  { 
    name: "pasta con il pistacchio",
    description: "pasta with pistacchios and sausage",
    ingredients: `
* 4 links sweet italian sausage
* 2 tbsp olive oil
* 1 glass white wine
* 4 cloves garlic
* crushed red pepper flakes
* 28oz whole peeled tomatoes, chopped or crushed by hand
* a few mint leaves
* 1 lb casarecce pasta
* 1 cup crushed pistacchio, divided in two`,
    instructions: `
Using two pans, one to saute the sausage, another for garlic:
1. In the first pan, saute the sausage, casings removed, in olive oil and break up. When browned, add a glass of white wine and cook off.
1. In the other pan, saute garlic and a bit of crushed red pepper. Once aromatic, add the chopped whole tomatoes and half of the pistacchio.
1. Once the sauce is combined, allow to simmer for about 15 minutes. While sauce is simmering, cook pasta to package instructions. 
1. When simmering is done, combine sausage with sauce and salt to taste.
1. With the fire off, add mint leaves and the rest of the pistacchios, then toss with pasta.`,
    tags: "sausage, pistacchio, pistachio, tomato, pasta, italian",
    notes: "A paella pan or wok is good for combining ingredients",
    _id: "pasta-con-il-pistacchio"
  },
  {
    name: "pancakes",
    description: "basic pancakes",
    ingredients: `
* 1 cups AP flour
* 1 tsp backing powder
* 1/8 tsp table salt (about 1/4 tsp diamon crystal kosher salt)
* 1 tbsp sugar
* 1 eggs
* 3/4 + cups milk
* 1 tbsp melted butter, cooled slightly`,
    instructions: `
1. Heat a large skillet over medium low heat.
1. Mix together dry ingredients in a large bowl.
1. Separately, beat eggs into milk, then stir in butter.
1. Lightly stir wet mixture into dry, thinning with additional milk if needed. Optionally, stir in a handful of chocolate chips, blueberries, or other additions.
1. Cook pancakes in about a tsp of butter or oil, allowing fat to heat up before ladeling in about 1/4 cup of batter per pancake. 
1. Flip pancakes when the surface bubbles, after around 2 minutes, and cook on the other side until just browned.
1. To keep warm, optionally store on a heatproof plate in a 200 degree oven.`,
    tags: "pancakes, breakfast",
    notes: "makes about 2 servings of pancakes",
    _id: "basic-pancakes"
  }
]

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
