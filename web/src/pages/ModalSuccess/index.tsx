import React from "react";
import { useHistory } from "react-router-dom";
import { FiCheckCircle } from "react-icons/fi";
import "./styles.css";

const ModalSuccess = () => {
  const history = useHistory();

  setTimeout(() => {
    history.push("/");
  }, 3000);

  return (
    <div className="success">
      <FiCheckCircle color="#34CB79" size="36" />
      <h1 className="success-message">Cadastro concluído!</h1>
    </div>
  );
};

export default ModalSuccess;
