import Link from "next/link";
import { Recipe } from "@/types"; 
import Tags from "./tags";
import PageBody from "./pageBody";
import React, { useState } from "react";

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
    <div className="mb-2 p-2 py-2 border-stone-100/100 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200">
      <Link 
        href={`recipes/${id}`} 
        className="text-3xl lg:text-4xl text-slate-700 hover:text-blue-500 font-bold py-2">
          {name}
      </Link>
      <div className="flex-col">
        <p className="text-l text-slate-600 italic my-2 py-2">{description}</p>
        <Tags tagsList={tagsList} />
      </div>
    </div>
  );
};

const FilterItem = ({name, toggleHandler, filter, setFilter}) => (
  // needs type annotation
  <>
  <input onChange={toggleHandler(filter, setFilter)} type="checkbox" id={`${name}-filter`} name={name} className="hidden peer" required/>
  <label 
    htmlFor={`${name}-filter`}
    className={`${filter ? "border-blue-600 text-blue-600" : "border-slate-300 text-slate-400"} rounded-lg border-2 text-xs font-bold py-1 px-4 mx-1 hover:text-gray-600 hover:bg-gray-100`} 
  >
    {name}
  </label>
  </>
);

const RecipeList = ({ recipes }: {recipes: Recipe[]}) => {
  
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filters, setFilters] = useState<map<string, boolean>>({"food": true, "drinks": false});
  const [foodFilter, setFoodFilter] = useState<boolean>(true);
  const [drinksFilter, setDrinksFilter] = useState<boolean>(false);


  const handleSearchbar = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearchTerm(e.target.value);
  }


  let filteredRecipes: Recipe[] = recipes;

  const filter = ""
  if (!foodFilter) {
    filteredRecipes = filteredRecipes.filter(r => r.category !== "food")
  } 
  if (!drinksFilter) {
    filteredRecipes = filteredRecipes.filter(r => r.category !== "drink")
  }

  if (searchTerm.length > 0) {
    filteredRecipes = filteredRecipes.filter(r => 
      r.tags.includes(searchTerm) || r.name.toLowerCase().includes(searchTerm)
    );
  }

  const handleFilterToggle = (filter: boolean, setFilter: React.Dispatch<React.SetStateAction<boolean>>) => () => {
    setFilter(!filter);
  }

  const handleClearFilters = () => {
    setFoodFilter(true);
    setDrinksFilter(true);
    setSearchTerm("");
  }

  return (
    <PageBody>
      <div className="my-2 text-slate-600">
        Show:
        {/* <input onChange={handleFilterToggle(foodFilter, setFoodFilter)} type="checkbox" id="food-filter" name="food" className="hidden peer/food" required/>
        <label 
          htmlFor="food-filter" 
          className={`${foodFilter ? "border-blue-600 text-blue-600" : "border-slate-300 text-slate-400"} rounded-lg border-2 text-xs font-bold py-1 px-4 mx-1 hover:text-gray-600 hover:bg-gray-100`} 
        >
          food
        </label> */}
        <FilterItem name="food" toggleHandler={handleFilterToggle} filter={foodFilter} setFilter={setFoodFilter} />

        <input onChange={handleFilterToggle(drinksFilter, setDrinksFilter)} type="checkbox" id="drink-filter" name="drinks" value="drinks" className="hidden peer/drinks" required/>
        <label 
          htmlFor="drink-filter" 
          className={`${drinksFilter ? "border-blue-600 text-blue-600" : "border-slate-300 text-slate-400"} rounded-lg border-2 text-xs font-bold py-1 px-4 mx-1 hover:text-gray-600 hover:bg-gray-100`}      >
          drinks
        </label>
        <button onClick={handleClearFilters} className="text-sm text-slate-600 mx-1">
          show all
        </button>
      </div>

        <label htmlFor="simple-search" className="sr-only">Search</label>
        <div className="relative w-full">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
          </div>
          <input onChange={handleSearchbar} value={searchTerm} type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required/>
        </div>

      {filteredRecipes.map(r =>
        <RecipeListItem
          key={r._id}
          id={r._id}
          name={r.name}
          tags={r.tags}
          description={r.description}
        />)}
    </PageBody>
  );
};

export default RecipeList;