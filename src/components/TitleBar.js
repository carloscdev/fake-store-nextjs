
export const TitleBar = (props) => {
  const { items } = props
  return (
    <ul className="text-sm flex items-center gap-2 justify-center bg-gray-100 py-3 text-light">
      {items.map((item, index) => (
        <li key={index} className="text-primary last:text-gray-500">
          <span>{item}</span>
          <span className={"text-gray-300 " + ((index + 1) ==  items.length && 'hidden')}> / </span>
        </li>
      ))}
    </ul>
  )
}
