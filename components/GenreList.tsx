import useGenres, { Genre } from "@/hooks/useGenres";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { ImSpinner3 } from "react-icons/im";
type Props = {
  selectedGenre: Genre | null;
  setGenre: (genre: Genre) => void;
};

const GenreList = ({ selectedGenre, setGenre }: Props) => {
  const sideBar = useRef<HTMLUListElement | null>(null);
  useEffect(() => {
    const scrollDetector = (e: Event) => {
      if (!sideBar || !sideBar.current) return;
      const position = sideBar.current.getBoundingClientRect();
      if (!position) return;
      console.log(scrollY);
      if (position.top < position.height / -5) {
        const moveToBottom = position.top;
        //        sideBar.current.style.transform = `translateY(${scrollY - 30}px)`;
      }
    };
    window.addEventListener("scroll", scrollDetector);
  }, []);
  const { data, error } = useGenres();
  if (error) return null;
  return (
    <div className="pl-[0.5rem] sm:pt-8">
      <h2 className="text-4xl dark:text-darkTeritary mb-4">Genre</h2>
      <ul className=" " ref={sideBar}>
        {!error && !data && (
          <ImSpinner3 className="animate-spin" fontSize={30} />
        )}
        {data?.results.map((genre) => (
          <div
            className={`flex items-center gap-2 py-[0.45rem] ${
              selectedGenre === genre && "translate-x-4 font-semibold"
            } transition-transform hover:translate-x-4`}
            key={genre.id}
          >
            <Image
              className="rounded-md min-h-[32px] object-cover"
              src={genre.image_background}
              alt={genre.name}
              width={32}
              height={32}
            ></Image>
            <button
              key={genre.id}
              className="dark:text-darkTeritary text-left"
              data-testid="genre-button"
              onClick={() => setGenre(genre)}
            >
              {genre.name}
            </button>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default GenreList;
