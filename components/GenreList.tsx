import useGenres from "@/hooks/useGenres";
type Props = {};

const GenreList = (props: Props) => {
  const { data, error } = useGenres();
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
