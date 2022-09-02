import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { unicoPj } from "../functions/functions";

const Personaje = () => {
  const [personaje, setPersonaje] = useState(null);
  const params = useParams();

  useEffect(() => {
    unicoPj(params.id, setPersonaje);
  }, [params.id]);

  return (
    <>
      {personaje !== null ? (
        <div>
          <h2>Personaje {params.id}</h2>
          <p>Nombre: {personaje.name}</p>
          <img src={personaje.image} alt={personaje.name} />
        </div>
      ) : (
        "Cargando..."
      )}
    </>
  );
};

export default Personaje;
