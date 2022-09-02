import React, { useEffect, useState } from "react";
import { todosPj } from "../functions/functions";

const Inicio = () => {
  const [personajes, setPersonajes] = useState(null);

  useEffect(() => {
    todosPj(setPersonajes);
  }, []);

  return (
    <>
      {personajes !== null
        ? personajes.map((personaje) => (
            <div key={personaje.id}>
              <a href={`personaje/${personaje.id}`}>{personaje.name}</a>
            </div>
          ))
        : "No hay Pjs"}
    </>
  );
};

export default Inicio;
