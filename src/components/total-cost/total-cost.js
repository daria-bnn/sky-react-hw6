const TotalCost = (props) => {
  const { books } = props

  const sum = books.reduce(
    (previosValue, book) => previosValue + book.quantity * book.price,
    0
  )

  return (
    <tr>
      <th>Итоговая стоимость</th>
      <th>{sum}</th>
    </tr>
  )
}

export default TotalCost
