import GenreFetcher from "@/hooks/useGenres";
import useSWR from "swr";

type Props = {};

const GenreList = (props: Props) => {
  const { data, error } = useSWR(
    "https://api.rawg.io/api/genres",
    GenreFetcher
  );
  console.log(data);
  return (
    <ul>
      {data?.results.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
