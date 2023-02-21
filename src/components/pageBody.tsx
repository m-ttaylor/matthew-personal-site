interface Props {
  children?: React.ReactNode
}

const PageBody: React.FC<Props> = (props) => (
  <div className="w-full max-w-3xl mt-4 mx-auto mb-6">
    {props.children}
  </div>
)

export default PageBody;