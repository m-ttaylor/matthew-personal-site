import Link from "next/link";
import { Recipe } from "@/types"; 
import Tags from "./tags";

export interface RecipeListProps {
  recipes: Recipe[]
}

interface RecipeListItemProps {
  name: Recipe["name"]
  tags: Recipe["tags"]
  id: Recipe["_id"]
  description: Recipe["description"]
}
export const RecipeListItem = (props: RecipeListItemProps) => {
  if (!props) {
    return <></>
  }
  
  const { name, tags, id, description } = props;
  const tagsList = tags.split(",");

  return (
    <div className="rounded-l my-3 p-4">
      {/* <p className="text-2xl p-2">{name}</p> */}
      <Link href={`recipes/${id}`}className="text-2xl font-bold p-1">{name}</Link>
      <div className="flex-col">
        <p className="text-slate-600 p-1">{description}</p>
        {/* <p className="text-slate-600 p-2">tags: </p> */}
        <Tags tagsList={tagsList} />
      </div>
    </div>
  );
};

const RecipeList = ({ recipes }: {recipes: Recipe[]}) => {
  
  return (
    <div className="flex-col max-w-4xl w-full mx-auto">
      <h1 className="mb-4 p-2 text-4xl font-bold">Recipes</h1>
      {recipes.map(r =>
        <RecipeListItem
          key={r._id}
          id={r._id}
          name={r.name}
          tags={r.tags}
          description={r.description}
        />)}
    </div>
  );
};

export default RecipeList;