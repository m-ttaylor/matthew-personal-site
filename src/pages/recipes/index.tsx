import Container from "@/components/container";
import RecipeList, { RecipeListProps } from "@/components/recipeList";
import RecipesSubmenu from "@/components/recipesSubmenu";
import recipeService from '@/services/recipeService';
import { GetStaticProps, NextPage } from "next";
import Head from "next/head";

export const getStaticProps: GetStaticProps<RecipeListProps> = async (context) => {

  const recipes = await recipeService.getRecipes();

  return {
    props: {
      recipes
    },
  }
}

const RecipesPage: NextPage<RecipeListProps> = ({ recipes }) => {
  return (
    <>
      <Head>
        <title>Recipes</title>
        <meta name="description" content="A handful of digitized recipes" />
      </Head>
      <Container>
        <RecipesSubmenu />
        <RecipeList recipes={recipes} />
      </Container></>
  );
}

export default RecipesPage;