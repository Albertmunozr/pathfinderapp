import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { singleSpell } from "../functions/functions";

const Personaje = () => {
  const [spell, setSpell] = useState(null);
  const params = useParams();

  useEffect(() => {
    singleSpell(params.id, setSpell);
  }, [params.id]);

  console.log(spell);

  return (
    <>
      {spell !== null ? (
        <div>
          <br />
          <br />
          <br />
          <br />
          <h2>ID: {params.id}</h2>
          <h2>
            {spell.results[0].name} - Nivel: {spell.results[0].data.level.value}
          </h2>
          <p>Tipo: {spell.results[0].type}</p>
          <p>Description: {spell.results[0].data.description.value}</p>
          <p>Duration: {spell.results[0].data.duration.value}</p>
        </div>
      ) : (
        "Cargando..."
      )}
    </>
  );
};

export default Personaje;
