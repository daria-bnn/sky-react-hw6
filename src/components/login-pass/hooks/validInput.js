import { useEffect, useState } from 'react'

const regEmail =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const validInput = (initValue, rules, dirty) => {
  const [error, setError] = useState()

  useEffect(() => {
    if (!dirty) return

    const arrNameError = Object.keys(rules)

    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < arrNameError.length; i++) {
      if (!initValue && arrNameError[i] === 'isEmpty') {
        setError('Поле не может быть пустым')
        break
      }

      if (arrNameError[i] === 'isValidEmail' && !initValue.match(regEmail)) {
        setError('Неккоректный email')
        break
      }

      if (
        arrNameError[i] === 'isLength' &&
        initValue.length < rules[arrNameError[i]]
      ) {
        setError(
          `Поле должно содержать более ${rules[arrNameError[i]]} символов`
        )
        break
      }

      setError('')
    }
  }, [initValue, dirty])

  return error
}

export default validInput
