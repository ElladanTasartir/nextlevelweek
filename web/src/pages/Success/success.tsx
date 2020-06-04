import React from "react";
import { useHistory } from "react-router-dom";
import "./styles.css";
import { FiCheckCircle } from "react-icons/fi";

const Success = () => {
  const history = useHistory();

  setTimeout(() => {
    history.push('/');
  }, 5000);

  return (
    <div className="success">
      <FiCheckCircle color={"#04D361"} size={36} />
      <h1 className="success-message">Cadastro concluído!</h1>
    </div>
  );
};

export default Success;
