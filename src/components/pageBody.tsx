interface Props {
  children?: React.ReactNode
}

const PageBody: React.FC<Props> = (props) => (
  <div className="w-full max-w-4xl my-2 px-2 py-2 mx-1 lg:mx-auto lg:max-w-4xl lg:px-6 border-solid border-2 rounded-lg border-slate-400">
    {props.children}
  </div>
)

export default PageBody;