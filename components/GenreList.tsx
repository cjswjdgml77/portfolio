import useGenres from "@/hooks/useGenres";
import Image from "next/image";
import { ImSpinner3 } from "react-icons/im";
type Props = {};

const GenreList = (props: Props) => {
  const { data, error } = useGenres();
  console.log(data);
  if (error) return null;
  return (
    <ul className="pt-5 sm:pt-10">
      {!error && !data && <ImSpinner3 className="animate-spin" fontSize={30} />}
      {data?.results.map((genre) => (
        <div
          className="flex items-center gap-2 pl-[0.5rem] py-[0.45rem]"
          key={genre.id}
        >
          <Image
            className="rounded-md min-h-[32px]"
            src={genre.image_background}
            alt={genre.name}
            width={32}
            height={32}
          ></Image>
          <li key={genre.id} className="dark:text-darkTeritary">
            {genre.name}
          </li>
        </div>
      ))}
    </ul>
  );
};

export default GenreList;
