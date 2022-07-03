/* eslint-disable guard-for-in */
import { useEffect, useState } from 'react'

const useInput = (initValue, rules) => {
  const [value, setValue] = useState(initValue)
  const [dirty, setDurty] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    if (!value) {
      setError(rules.error)
    } else {
      setError('')
    }
  }, [dirty, value])

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
    error,
  }
}

export default useInput
