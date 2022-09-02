import React, { useEffect, useState } from "react";
import { allSpells } from "../functions/functions";

const Inicio = () => {
  const [spells, setSpells] = useState(null);

  useEffect(() => {
    allSpells(setSpells);
  }, []);

  console.log(spells);

  return (
    <>
      {spells !== null
        ? spells.map((spell) => (
            <div key={spell._id}>
              <a href={`spell/${spell._id}`}>{spell.name}</a>
            </div>
          ))
        : "Cargando..."}
    </>
  );
};

export default Inicio;
