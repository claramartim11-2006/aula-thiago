import React from "react";
import { useState } from 'react';
import "./CadastroCliente.css";

function CadastroCliente({aoFinalizar}) {
   const [dados, setDados] = useState({
    nome: "",
    email: "",
    telefone: ""
   });

   const handleSubmit = (e) => {
    e.preventDefault();
    aoFinalizar(dados);
   };

   return (
    <div className="cadastro-container">
        <h1>Seja Bem-Vinda ao EveNails</h1>
        <p></p>


    </div>
   );









}
export default CadastroCliente