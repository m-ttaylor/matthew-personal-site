interface Props {
  children?: React.ReactNode
}

const PageBody: React.FC<Props> = (props) => (
  <div className="w-full max-w-4xl p-1 my-5 lg:mx-auto">
    {props.children}
  </div>
)

export default PageBody;