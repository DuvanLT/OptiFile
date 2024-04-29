import React, { useState } from "react";
import { useDropzone } from "react-dropzone";

export default function MyDropzone() {
  const [file, setFile] = useState(null);

  const onDrop = (acceptedFiles) => {
    setFile(acceptedFiles[0]);
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div className="dropzone__container">
      <div {...getRootProps()} className="dropzone">
        <input {...getInputProps()} />
        <p>Arrastra y suelta archivos aquí, o haz clic para seleccionar archivos</p>
      </div>
      {file && (
        <picture className="imageContainer">
          <img src={URL.createObjectURL(file)} alt="Imagen subida" />
        </picture>
      )}
    </div>
  );
}

