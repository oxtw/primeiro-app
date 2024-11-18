import { useState } from 'react';

function App(){
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [idade, setIdade] = useState('');

  const [user, setUser] = useState({});

  //função para registar o formulário
  function handleRegister(e){
    //função para não recarregar a pagina após confirmar o envio do formulário
    e.preventDefault();

    alert('Usuario registrado com sucesso!')
    setUser({
      nome: nome,
      idade: idade,
      email: email,
    })
  }


  return(
    <div>
      <h1>Cadastrando Usuário</h1>
      <form onSubmit={handleRegister}>
        <label>Nome:</label><br/>
        <input 
        placeholder='Digite seu nome'
        value={nome}
        onChange={ (e) => setNome(e.target.value) }
        ></input><br/>
        
        <label>Email:</label><br/>
        <input 
        placeholder='Digite seu email'
        value={email}
        onChange={ (e) => setEmail(e.target.value)}
        ></input><br/>
        
        <label>Idade:</label><br/>
        <input 
        placeholder='Digite sua idade'
        value={idade}
        onChange={ (e) => setIdade(e.target.value)}
        ></input><br/>

        <button type='submit'>Registrar</button>
      </form>

      <br/><br/>

      <div>

       <span>Bem vindo: {user.nome}</span><br/>
       <span>Email: {user.email}</span><br/>
       <span>Idade: {user.idade}</span><br/>

      </div>
    </div>
  );
}

export default App;