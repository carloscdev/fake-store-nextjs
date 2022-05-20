
export const Input = ({value, setValue, ...rest}) => {
  return (
    <input value={value} onChange={e => setValue(e.target.value)} {...rest} />
  )
}
