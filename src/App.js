import { useState } from 'react';

function App(){
  const [input, setInput] = useState('');
  const [tarefas, setTarefas] = useState([
    'Pagar a conta de Luz',
    'Estudar React JS',

  ]);


  //função para registar o formulário
  function handleRegister(e){
    //função para não recarregar a pagina após confirmar o envio do formulário
    e.preventDefault();

    setTarefas([...tarefas, input]);
    setInput('');
  }


  return(
    <div>
      <h1>Cadastrando Usuário</h1>
      <form onSubmit={handleRegister}>
        <label>Nome da tarefa:</label><br/>
        <input 
        placeholder='Digite uma tarefa'
        value={input}
        onChange={ (e) => setInput(e.target.value) }
        ></input><br/>

        <button type='submit'>Registrar</button>
      </form>

      <br/><br/>

      <ul>
          {tarefas.map(tarefa => (
            <li key={tarefa}>{tarefa}</li>
          ))}
      </ul>
    </div>
  );
}

export default App;