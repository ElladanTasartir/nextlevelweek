import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
//instalado o pacote de tipagem separada
//Browser Router é o mais comum para fazer rotas dentro do React no navegador

import Home from './pages/Home';
import CreatePoint from './pages/CreatePoint';
import Success from "./pages/Success/success";

const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={Home} path="/" exact />
      {/* Qual componente será renderizado na rota / */}
      <Route component={CreatePoint} path="/create-point" />
      <Route component={Success} path="/success" />
    </BrowserRouter>
  );
};

export default Routes;