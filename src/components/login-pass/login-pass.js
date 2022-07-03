import useInput from '../hook'
import Error from '../error/error'

const LoginPass = () => {
  const email = useInput('', { error: 'Введите email' })
  const password = useInput('', { error: 'Введите пароль' })


  return (
    <div>
      <form>
        <h1>Войдите в личный кабинет</h1>
        <Error dirty={email.dirty} error={email.error} />
        <input
          name="email"
          type="text"
          placeholder="Введите адрес почты"
          value={email.value}
          onChange={email.onChange}
          onBlur={email.onBlur}
        />
        <Error dirty={password.dirty} error={password.error} />
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
