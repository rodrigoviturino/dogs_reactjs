import React from 'react';

const UserPost = () => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [email, setEmail] = React.useState('');

  function handleSubmit(event){
    event.preventDefault();
    
    fetch(`https://dogsapi.origamid.dev/json/api/user`,
      {
        method: 'POST',
        headers: {
          'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
          username: username,
          password: password,
          email: email
        }),
      })
      .then(response => {
        console.log(response)
        return response.json()
      })
      .then((json => {
        console.log(json);
        return json
      }))

  }


  return (
    <form onSubmit={handleSubmit}>

      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={ ((event) => setUsername(event.target.value)) }
      />

      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={ ((event) => setPassword(event.target.value)) }
      />

      <input
        type="email"
        placeholder="email"
        value={email}
        onChange={ ((event) => setEmail(event.target.value)) }
      />
        
        <button>Enviar</button>
    </form>
  )
}

export default UserPost
