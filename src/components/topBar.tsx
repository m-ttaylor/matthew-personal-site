import Link from "next/link";

const TopBarItem = ({name, linkTo}: {name: string, linkTo: string}) => (
  <Link href={linkTo} className="block mt-4 text-xl md:inline-block md:mt-2 text-slate-500 hover:text-blue mr-4">
    {name}
  </Link>
)

const TopBar = () => (
  <nav className="flex justify-center border-solid border-2 rounded-lg border-slate-400 mx-7 my-5">
    <div className="flex-col">
      <div className="text-center font-bold text-4xl">Matthew's Site</div>
      <div className="text-center">
        <TopBarItem name="home" linkTo="/" />
        <TopBarItem name="resume" linkTo="/resume"/>
        <TopBarItem name="recipes" linkTo="/recipes" />
        <TopBarItem name="foo" linkTo="/foo" />
      </div>
      <hr className="w-48 h-px mx-auto my-4 bg-slate-400 border-0 rounded md:my-5 dark:bg-gray-700"/>
    </div>
  </nav>
  
);

export default TopBar;