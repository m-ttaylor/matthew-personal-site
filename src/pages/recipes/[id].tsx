import { ParsedUrlQuery } from 'querystring';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';

import RecipeItem, { RecipeProps } from '@/components/recipeItem'
import recipeService from '@/services/recipeService';
import Container from '@/components/container';
import { getMarkdownAsHtml } from '@/lib/markdown';
import RecipesSubmenu from '@/components/recipesSubmenu';
import Head from 'next/head';

interface Params extends ParsedUrlQuery {
  id: string;
}

export const getStaticPaths: GetStaticPaths<Params> = async () => {

  const recipes = await recipeService.getRecipes();
  const paths = recipes.map(recipe => ({
    params: { id: recipe._id }
  })
  )

  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps<RecipeProps, Params> = async (context) => {

  const { id } = context.params!;
  const recipe = await recipeService.getRecipe(id);

  recipe.ingredients = await getMarkdownAsHtml(recipe.ingredients);
  recipe.instructions = await getMarkdownAsHtml(recipe.instructions);
  return {
    props: {
      recipe,
      key: id, // Apparently we need a key to avoid things breaking randomly when navigating back and forth/directly
    },
  }
}

const RecipePage: NextPage<RecipeProps> = ({ recipe }) => {
  return (
    <>
      <Head>
        <title>{recipe.name}</title>
        <meta name="description" content={recipe.description} />
      </Head><Container>
        <RecipesSubmenu />
        <RecipeItem recipe={recipe} />
      </Container>
    </>
  );
}

export default RecipePage;