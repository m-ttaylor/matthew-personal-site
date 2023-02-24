import TopBar from "./topBar";

interface Props {
  children?: React.ReactNode
}

const Container: React.FC<Props> = (props) => (
  <>
  <TopBar />
  <div className="mx-2 lg:mx-7 my-2 min-h-800 border-solid border-2 rounded-lg border-slate-400">
    {props.children}
  </div>
  </>
)

export default Container;