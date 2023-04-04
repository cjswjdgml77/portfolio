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
    <ul className="pt-5 sm:pt-10" ref={sideBar}>
      {!error && !data && <ImSpinner3 className="animate-spin" fontSize={30} />}
      {data?.results.map((genre) => (
        <div
          className={`flex items-center gap-2 pl-[0.5rem] py-[0.45rem] ${
            selectedGenre === genre && "translate-x-4 font-semibold"
          } transition-transform hover:translate-x-4`}
          key={genre.id}
        >
          <Image
            className="rounded-md min-h-[32px]"
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
  );
};

export default GenreList;
