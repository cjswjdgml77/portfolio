import axios, { AxiosError } from "axios";
import useSWR from "swr";

interface Game {
  description: string;
  website: string;
}

const getGameDetail = (url: string) =>
  axios
    .get(url + "?key=7ad26984614e4308baadfe754c1a00d6")
    .then((res) => res.data);

const useGame = (gameId: number): { data: Game; error: any } =>
  useSWR(`https://api.rawg.io/api/games/${gameId}`, getGameDetail);
export default useGame;
//: { data: Game; error: AxiosError }
