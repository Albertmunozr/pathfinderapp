import axios from "axios";

const urlApi = "https://rickandmortyapi.com/api/";
const endPointC = "character/";

const todosPj = async (state) => {
  const { data } = await axios.get(`${urlApi}${endPointC}`);
  state(data.results);
};

const unicoPj = async (id, state) => {
  const { data } = await axios.get(`${urlApi}${endPointC}${id}`);
  state(data);
};

export { todosPj, unicoPj };
