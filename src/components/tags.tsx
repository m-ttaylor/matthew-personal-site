const Tags = ({tagsList}: {tagsList: string[]}) => (<div className="flex flex-wrap">
  {tagsList.map(tag => <div className="text-slate-400 p-1" key={tag}>{tag}</div>
  )}
</div>);

export default Tags;