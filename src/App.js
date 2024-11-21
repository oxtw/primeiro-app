import React , {useEffect, useState} from "react";
import './style.css';

/*
api para consumir e realizar a requisição http
https://sujeitoprogramador.com/rn-api/?api=posts
*/

function App(){
  const [nutri, setNutri] = useState([]);

  useEffect(()=> {
    function loadApi(){
      let url = 'https://sujeitoprogramador.com/rn-api/?api=posts';
      fetch(url)
      .then((r)=> r.json())
      .then((json)=>{
        console.log(json);
        setNutri(json);
      })
    }
    loadApi();
  }, []);


  return(
    <div className="container">
      <header>
        <strong>React nutri</strong>
      </header>
      {/* retornando a api na pagina */}
      {nutri.map((item)=>{
        return(
          <article key={item.id} className="posts"> 
              <strong className="titulo">{item.titulo}</strong>
              <img src={item.capa} alt={item.titulo} className=""></img>
              <p className="subtitulo">{item.subtitulo}</p>
              <a className="botao">Acessar</a>
          </article>
        )
      })}
    </div>
  );
}

export default App;