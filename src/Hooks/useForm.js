import React from 'react';

const types = {
  email: {
    regex: /^([a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?)$/,
    message: 'Preencha o campo!',
  },
};

const useForm = (type) => {
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState(null);

  // Campo do formulario
  function validate(value){
    if(type === false) return true;

    if(value.length === 0 ){
      setError('Preencha o campo.')
      return false;
    } else if(types[type] && !types[type].regex.test(value)){
      setError(types[type].message)
    } else {
      setError(null)
      return true;
    }
  }

  function onChange(event){
    validate(event.target.value);
    setValue(event.target.value)
  }

  return ({
    value,
    setValue,
    onChange,
    error,
    validate: () => validate(value) /* isso evita de ao usar fazer validate(nomeDoInput que vai validar)*/,
    onBlur: () => validate(value)

  })
}

export default useForm;
