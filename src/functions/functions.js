import axios from "axios";

const urlPF2 = "https://api.pathfinder2.fr/v1/pf2/spell";
const config = { Authorization: "da468b89-2bf8-4e2b-a939-79c6e6ef25ce" };

const allSpells = async (state) => {
  const { data } = await axios.get(`${urlPF2}`, {
    headers: config,
  });
  state(data.results);
};

const singleSpell = async (id, state) => {
  const { data } = await axios.get(`${urlPF2}?_id=${id}`, {
    headers: config,
  });
  state(data);
};

export { singleSpell, allSpells };
