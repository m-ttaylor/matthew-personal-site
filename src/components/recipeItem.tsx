import { Recipe } from "@/types";
import Link from "next/link";
import PageBody from "./pageBody";
import Tags from "./tags";

export interface RecipeProps {
  recipe: Recipe
}

const EditButton = ({id}: {id: string}) => (
   <div className="inline-block text-sm px-3 leading-none border rounded text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 lg:mt-0">
      <Link
        className="inline-flex items-center"
        href={`/recipes/edit/${id}`}
      >
        <svg className="w-6 h-6 mr-2 dark:text-white"fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"></path>
        </svg>
        edit
    </Link>
  </div>
);

const SubHeader = ({text}: {text: string}) => (
  <p className="text-2xl text-slate-700 p-2 mt-2">{text}</p>
);

const MarkdownContent = ({content}: {content: string}) => (
  <article className="prose lg:prose-xl px-2 " dangerouslySetInnerHTML={{ __html: content }}></article>
);

const RecipeItem = ({ recipe: { name, description, tags, ingredients, instructions, notes, _id } }:  RecipeProps ) => {
  const tagsList = tags.split(",");
  
  return (
      
    <PageBody>
      <div>
        <div className="flex items-center justify-between flex-wrap-reverse">
          <span className="flex">
            <p className="text-3xl lg:text-4xl text-slate-700 font-bold p-2">
              {name}
            </p>
          </span>
          {/* <EditButton id={_id}/> */}
        </div>
        <p className="text-l text-slate-600 italic p-2">{description}</p>
      </div>
      <SubHeader text="Ingredients" />
      <MarkdownContent content={ingredients} />
      <SubHeader text="Steps" />
      <MarkdownContent content={instructions} />
      <SubHeader text="Tags" />
      <Tags tagsList={tagsList}/>
    </PageBody>
  );
};

export default RecipeItem;