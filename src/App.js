import Nome from './components/Nome';
import { useState } from 'react';

function App(){
  const [aluno, setAluno] = useState('Miguel');

  function handleChangeName(nome){
    setAluno(nome)
  }

  return(
    <div>
      <h1>Componente App</h1><br/>
      <h2>Olá: {aluno}</h2>
      <button onClick={ () => handleChangeName('Miguel Weigert') }>
        Mudar Nome
      </button>
      {/* <Nome aluno="Lucas" idade={30}/> */}
    </div>
  );
}

export default App;