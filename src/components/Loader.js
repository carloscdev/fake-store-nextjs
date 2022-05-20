
export const Loader = (props) => {
  const { background, width, height, rounded } = props
  return (
    <div className="flex flex-col space-y-2 animate-pulse">
      <div className={`${rounded || 'rounded-md'} ${width} ${height} ${background || 'bg-gray-300'}`}></div>
    </div>
  )
}
