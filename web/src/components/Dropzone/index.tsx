import React, { useCallback, useState } from "react";
import { FiUpload } from "react-icons/fi";
import { useDropzone } from "react-dropzone";

import "./styles.css";

interface Props {
    onFileUploaded: (file: File) => void; //já que estamos settando um State, não há retorno
    //Recebe como parâmetro um Arquivo e não retorna nada
}

const Dropzone: React.FC<Props> = ({onFileUploaded}) => { //desestruturou-se a props
  const [selectedFileUrl, setSelectedFileUrl] = useState("");

  const onDrop = useCallback((acceptedFiles) => {
    const [file] = acceptedFiles; //retorna um array de arquivos enviados, já que aceitamos apenas 1
    //sempre pegaremos o primeiro
    const fileUrl = URL.createObjectURL(file);
    //URL é um objeto global do js e podemos usar esse método createObjURL para criar ma url para a imagem
    setSelectedFileUrl(fileUrl);
    onFileUploaded(file); //passaremos o arquivo em si aqui dentro
  }, [onFileUploaded]);

  const { getRootProps, getInputProps /* isDragActive  */ } = useDropzone({
    onDrop,
    accept: "image/*",
  });
  //image/* signfica que aceita qualquer tipo de imagem
  return (
    <div className="dropzone" {...getRootProps()}>
      <input {...getInputProps()} accept="image/*" />
      {/* Existe uma propriedade para o input multipler, se colocarmos, ele aceita múltiplos arquivos */}
      {/* colocando o accept no input, ele já nem mostra para o usuário ao abrir o explorer outros tipos de arquivos
      fora imagens */}
      {/* {isDragActive ? ( //isDragActive representa se o usuário possui o item em cima ou não
        <p>Drop the files here...</p>
      ) : (
        <p>Drag 'n' drop some files here, or click to select files</p>
      )} */}

      {selectedFileUrl ? (
        <img src={selectedFileUrl} alt="Point thumbnail" />
      ) : (
        <p>
          <FiUpload />
          Imagem do estabelecimento
        </p>
      )}
    </div>
  );
};

export default Dropzone;
