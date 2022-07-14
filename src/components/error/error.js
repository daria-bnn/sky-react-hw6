const Error = (props) => {
  if (!props.dirty && props.error) return null

  return <div>{props.error}</div>
}

export default Error
