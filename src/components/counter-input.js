const { useState } = require('react')

const CounterInput = (props) => {
  const { min, max } = props
  const [current, setCurrent] = useState(min)

  const onChange = (event) => {
    const { value } = event.target
    const validValues = /^-?[1-9]?\d*$/

    if (!validValues.test(value)) {
      return
    }

    const newText = parseInt(value, 10)

    if (Number.isNaN(newText)) {
      setCurrent(value)
      return
    }

    if (newText > max) {
      setCurrent(max)
      return
    }

    if (newText < min) {
      setCurrent(min)
      return
    }

    setCurrent(newText)
  }

  const increase = () => {
    if (current >= max || typeof current !== 'number') return

    setCurrent(current + 1)
  }

  const decrease = () => {
    if (current >= max || typeof current !== 'number') return

    setCurrent(current - 1)
  }

  return (
    <div>
      <h2>Счётчик с инпут (функциональный компонент)</h2>
      <button type="button" onClick={decrease}>
        -
      </button>
      <input onChange={onChange} value={current} />
      <button type="button" onClick={increase}>
        +
      </button>
    </div>
  )
}

export default CounterInput
