import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const Button = () => (
  <div className="area-button">
    <Link className="back-button" to='/'>Voltar</Link>
  </div>
);
export default Button;
