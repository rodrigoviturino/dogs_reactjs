import React from 'react';
import { Link } from 'react-router-dom';
import useForm from '../../Hooks/useForm';
import Button from '../Forms/Button';
import Input from '../Forms/Input';
// import { TOKEN_POST, USER_GET } from '../../api';
import { UserContext } from '../../UserContext';

const LoginForm = () => {
  // const [username, setUsername] = React.useState('');
  // const [password, setPassword] = React.useState('');

  const username = useForm();
  const password = useForm();
  const { userLogin } = React.useContext(UserContext);

  // React.useEffect(() => {
  //   const token = window.localStorage.getItem('token');
  //   // if(token){
  //   //   getUser(token)
  //   // }
  // },[])

  // async function getUser(token){
  //   const { url, options } = USER_GET(token);
  //   const response = await fetch(url, options);
  //   const json = await response.json();
  //   console.log(json)
  // }

  async function handleSubmit(event) {
    event.preventDefault();

    if(username.validate() && password.validate()) {
      userLogin(username.value, password.value);
      // const {url, options} = TOKEN_POST({
      //   username: username.value,
      //   password: password.value
      // });

      // const response = await fetch(url, options);
      // const json = await response.json();

      // window.localStorage.setItem('token', json.token);
      // getUser(json.token);
    }
  }

  return (
    <section>
      <h1>Login</h1>
      <form action="" onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />
        <Button>Entrar</Button>
        {/* <input type="text" 
          value={username}
          onChange={(event) => setUsername(event.target.value) }
        />*/}
      </form>
      <Link to='/login/criar'>Cadastro</Link>
    </section>
  )
}

export default LoginForm;
