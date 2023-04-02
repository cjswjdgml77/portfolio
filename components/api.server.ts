import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api/games",
  params: {
    key: "7ad26984614e4308baadfe754c1a00d6",
  },
});
