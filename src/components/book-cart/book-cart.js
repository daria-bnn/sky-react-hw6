import MinMaxCounter from '../min-max-counter/min-max-counter'

const BookCart = (props) => {
  const { id, title, price, quantity, rest } = props.book

  return (
    <tr key={id}>
      <td>{props.i + 1} </td>
      <td>{title} </td>
      <td>{price} </td>
      <td>
        <MinMaxCounter
          max={rest}
          min={1}
          current={quantity}
          setQuatinty={props.setQuatinty}
          id={id}
        />
      </td>
      <td>{quantity * price}</td>
      <td>
        <button type="button" onClick={() => props.deleteBook(id)}>
          Удалить
        </button>
      </td>
    </tr>
  )
}

export default BookCart
