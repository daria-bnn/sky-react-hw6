import { useState } from 'react'

import validInput from './validInput'

const getInput = (initValue, rules) => {
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

export default getInput
