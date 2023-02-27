import TopBar from "./topBar";

interface Props {
  children?: React.ReactNode
}

const Container: React.FC<Props> = (props) => (
  <>
  <TopBar />
  <div className="">
    {props.children}
  </div>

  <hr className="w-64 px h-px mx-auto bg-slate-400 border-0 rounded mt-6 mb-4 md:mt-24 md:mb-4 dark:bg-gray-700"/>
  <footer className="flex justify-center mx-2 lg:mx-7 mb-12">
    <div className="flex-col">
      <div className="font-mono text-center text-slate-500">
        Built with 
        <a className="text-sky-600 mx-2" href="https://www.typescriptlang.org/">TypeScript</a>
        and 
        <a className="text-sky-600 ml-2" href="https://nextjs.org/">Next.js</a>, 
        deployed on 
        <a className="text-sky-600 mx-2" href="https://pages.github.com/">GitHub Pages</a>
      </div>
      <div className="text-center text-blue-300 font-mono text-sm mt-2"><a href="https://github.com/m-ttaylor/matthew-personal-site">source</a></div>
    </div>
  </footer>
  </>
)

export default Container;