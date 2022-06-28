import useInput from '../hook'
import Error from '../error/error'

const LoginPass = () => {
  const email = useInput('', { isEmpty: true })
  const password = useInput('', { isEmpty: true, isLength: 4 })

  return (
    <div>
      <form>
        <h1>Войдите в личный кабинет</h1>
        <Error dirty={email.dirty} error={email.valid} />
        <input
          name="email"
          type="text"
          placeholder="Введите адрес почты"
          value={email.value}
          onChange={email.onChange}
          onBlur={email.onBlur}
        />
        <Error dirty={password.dirty} error={password.valid} />
        <input
          name="password"
          type="password"
          placeholder="Введите апроль"
          value={password.value}
          onChange={password.onChange}
          onBlur={password.onBlur}
        />
      </form>
    </div>
  )
}

export default LoginPass