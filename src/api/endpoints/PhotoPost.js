import React from 'react';

const PhotoPost = () => {
  const [token, setToken] = React.useState('');
  const [nome, setNome] = React.useState('');
  const [peso, setPeso] = React.useState('');
  const [idade, setIdade] = React.useState('');
  const [img, setImg] = React.useState('');

  function handleSubmit(event){
    event.preventDefault();

    const formData = new FormData();

    formData.append('img', img);
    formData.append('nome', nome);
    formData.append('peso', peso);
    formData.append('idade', idade);
    
    fetch(`https://dogsapi.origamid.dev/json/api/photo`,
      {
        method: 'POST',
        headers: {
          Authorization: 'Bearer' + token
        },
        body: formData,
      })
      .then(response => {
        console.log(response)
        return response.json()
      })
      .then((json => {
        console.log(json);
        setToken(json.token)
        return json
      }))

  }


  return (
    <form onSubmit={handleSubmit}>

      <input
        type="text"
        placeholder="token"
        value={token}
        onChange={ ((event) => setToken(event.target.value)) }
      />

      <input
        type="text"
        placeholder="nome"
        value={nome}
        onChange={ ((event) => setNome(event.target.value)) }
      />

      <input
        type="text"
        placeholder="peso"
        value={peso}
        onChange={ ((event) => setPeso(event.target.value)) }
      />

      <input
        type="text"
        placeholder="idade"
        value={idade}
        onChange={ ((event) => setIdade(event.target.value)) }
      />

      <input
        type="file"
        onChange={ ((event) => setImg(event.target.files[0])) }
      />
        
      <button>Enviar</button>
    </form>
  )
}

export default PhotoPost
