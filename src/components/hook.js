/* eslint-disable guard-for-in */
import { useEffect, useState } from 'react'

const validInput = (initValue, rules, dirty) => {
  const [error, setError] = useState('')

  useEffect(() => {
    if (!dirty) return

    // eslint-disable-next-line no-restricted-syntax
    for (const rule in rules) {
      switch (rule) {
        case 'isEmpty':
          !initValue ? setError('Поле не может быть пустым') : setError('')
          break

        case 'isLength':
          initValue.length < rules[rule]
            ? setError(`Поле должен содержать более ${rules[rule]} символов`)
            : setError('')
          break

        default:
        // do nothing
      }
    }
  }, [initValue, dirty])

  return error
}

const useInput = (initValue, rules) => {
  const [value, setValue] = useState(initValue)
  const [dirty, setDurty] = useState(false)

  const valid = validInput(value, rules, dirty)

  const onChange = (event) => {
    setValue(event.target.value)
  }

  const onBlur = () => {
    setDurty(true)
  }

  return {
    value,
    onChange,
    onBlur,
    dirty,
    valid,
  }
}

export default useInput
