import Link from "next/link";

/*
* This is a bit overcomplicated for just a title that links back to /recipes, but keeping it in place
* for more complicated grid layout that may be used.
*/
const TopBarItem = ({ name, linkTo }: { name: string, linkTo: string }) => (
  // <Link href={linkTo} className="text-l text-center text-slate-500 hover:text-blue-400 mx-1">
  <Link href={linkTo} className="text-4xl capitalize text-center font-bold text-slate-800 hover:text-slate-400 mx-4">
    {name}
  </Link>
)

const RecipesSubmenu = () => {
  return (
    // <div className="grid grid-cols-4 gap-2 content-between w-full max-w-xs pb-1 mx-1 lg:mx-auto my-2">
    <div className="w-full max-w-4xl pb-1 mx-1 lg:mx-auto my-2">
      {/* <div className="text-center space-x-6 divide-x divide-dashed divide-slate-300"> */}
      <TopBarItem name="recipes" linkTo="/recipes" />
      {/* <TopBarItem name="drinks" linkTo="/drinks"/>
        <TopBarItem name="misc" linkTo="/misc" /> */}
      {/* </div> */}
      {/* </div> */}
    </div>);
};

export default RecipesSubmenu;