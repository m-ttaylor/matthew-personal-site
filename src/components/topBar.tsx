import Link from "next/link";

const TopBarItem = ({name, linkTo}: {name: string, linkTo: string}) => (
  <Link href={linkTo} className="block mt-4 text-xl md:inline-block md:mt-2 text-slate-500 hover:text-slate-300 hover:underline mx-3">
    {name}
  </Link>
)

const siteName = "Scratchpad"

const TopBar = () => (
  <nav className="flex justify-center pt-8 pb-1 mx-2 lg:mx-7 my-2">
    <div className="flex-col">
      <div className="text-center font-bold text-4xl md:text-6xl p-2">{siteName}</div>
      <div className="text-center">
        <TopBarItem name="home" linkTo="/" />
        <TopBarItem name="work" linkTo="/resume"/>
        <TopBarItem name="cookbook" linkTo="/recipes" />
        <TopBarItem name="misc" linkTo="/misc" />
      </div>
      <hr className="w-60 h-px mx-auto my-4 bg-slate-400 border-0 rounded md:my-5 dark:bg-gray-700"/>
    </div>
  </nav>
  
);

export default TopBar;