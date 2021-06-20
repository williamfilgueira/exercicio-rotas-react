import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const PageHome = () => (

    <div className="conteudo-opcoes">
      
      <h1>Escolha seu caminho em JavaScript</h1>

    <Link className="option-front-end" to="/front-end">
      Front-end
    </Link>
    <Link className="option-back-end" to="/back-end">
      Back-end
    </Link>
  </div>

);

export default PageHome;
