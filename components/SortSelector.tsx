import React, { useRef } from "react";

type Props = {
  setOrder: (sortOrder: string) => void;
};

const SortSelector = ({ setOrder }: Props) => {
  const dropSelector = useRef<HTMLParagraphElement>(null);
  const dropRestArea = useRef<HTMLDivElement>(null);
  const checkInput = useRef<HTMLInputElement>(null);
  const hideBackground = (styleDisplay: string) => {
    if (!dropRestArea.current) return;
    const area = dropRestArea.current;
    if (area) area.style.display = `${styleDisplay}`;
  };
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-addded", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];
  return (
    <div className="h-[70px]">
      <div className="dropbox-container z-[10] relative pointer-events-none">
        <input
          className="drop-checkbox invisible w-0 h-0"
          type="checkbox"
          id="drop-sort"
          role="button"
          ref={checkInput}
        />
        <label className="text-darkTeritary" htmlFor="drop-sort">
          <p
            className="py-3 w-[auto] px-5 rounded-lg bg-darkGray pointer-events-auto"
            id="drop-selected"
            ref={dropSelector}
            onClick={() => {
              hideBackground("block");
            }}
          >
            Order by : Relevance
          </p>
          <ul
            className="invisible origin-top-left scale-y-0 duration-[450ms] ease-out transition-all w-[200px] rounded-lg gap-3 py-3 mt-4 bg-[#404040]"
            role="listbox"
            id="drop-list"
          >
            {sortOrders.map((order, idx) => (
              <li
                className="opacity-0 py-3 px-5 transition-transform duration-[var(--duration)] translate-y-[-50%] text-darkTeritary hover:bg-darkGray pointer-events-auto"
                role="option"
                aria-selected="true"
                key={order.value}
                value={order.value}
                onClick={() => {
                  if (!dropSelector.current) return;

                  const ptag = dropSelector.current;
                  ptag.innerHTML = `Order by : ${order.label}`;
                  hideBackground("none");
                  setOrder(order.value);
                }}
                style={
                  {
                    "--duration": `${500 + 100 * idx}ms`,
                  } as React.CSSProperties
                }
              >
                {order.label}
              </li>
            ))}
          </ul>
        </label>
      </div>
      <div
        className="fixed top-0 left-0 bottom-0 right-0 hidden"
        ref={dropRestArea}
        onClick={(e) => {
          if (!checkInput.current) return;
          const checkBox = checkInput.current;
          checkBox.click();
          hideBackground("none");
        }}
      ></div>
    </div>
  );
};

export default SortSelector;
