import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Bem vindo a pagina Home</h1>
      <br />

      <Link to="/sobre">Sobre</Link><br />
      <Link to="/contato">Contato</Link><br />

      <hr />

      <Link to="/produto/123">Acessar Produto 123</Link><br />

    </div>
  );
}

export default Home;
