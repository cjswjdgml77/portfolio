import React, { useRef } from "react";
import { FaSearch } from "react-icons/fa";
type Props = {
  search: (searchText: string) => void;
};

const SearchInput = ({ search }: Props) => {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (!ref.current) return;
        search(ref.current.value);
      }}
      className="relative flex w-full items-center mx-5 sm:mx-10"
    >
      <FaSearch className="w-[2rem] absolute text-darkTeritary "></FaSearch>
      <input
        className="px-[2rem] w-full h-[40px] rounded-2xl bg-darkSecondary text-darkTeritary"
        type="text"
        placeholder="Search games..."
        ref={ref}
      />
    </form>
  );
};

export default SearchInput;
