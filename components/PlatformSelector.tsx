import usePlatforms, { Platform } from "@/hooks/usePlatforms";
import type { MouseEvent } from "react";

type Props = {
  setPlatform: (platform: Platform) => void;
};

const PlatformSelector = ({ setPlatform }: Props) => {
  const { data, error } = usePlatforms();
  if (error) return null;

  const hideBackground = (styleDisplay: string) => {
    const area = document.getElementById("dropbox-restarea") as HTMLDivElement;
    if (area) area.style.display = `${styleDisplay}`;
  };

  const platformClickHandler = (e: MouseEvent, platform: Platform) => {
    const selected = document.getElementById(
      "drop-selected"
    ) as HTMLParagraphElement;
    if (!selected) return null;

    const text = e.target as HTMLElement | null;
    if (!text) return;
    selected.innerHTML = text.innerText;
    hideBackground("none");
    setPlatform(platform);
  };
  return (
    <div className="h-[70px]">
      <div
        className="z-[999] absolute pointer-events-none"
        id="dropbox-container"
      >
        <input
          className="invisible w-0 h-0"
          type="checkbox"
          id="drop-checkbox"
          role="button"
        />
        <label className="text-darkTeritary" htmlFor="drop-checkbox">
          <p
            className="py-3 w-[140px] px-5 rounded-lg bg-darkGray pointer-events-auto"
            id="drop-selected"
            onClick={() => {
              hideBackground("block");
            }}
          >
            Plaform
          </p>
          <ul
            className="invisible origin-top-left scale-y-0 duration-[450ms] ease-out transition-all w-[200px] rounded-lg gap-3 py-3 mt-4 bg-[#404040]"
            role="listbox"
            id="drop-list"
          >
            {data &&
              data.results.map((platform, idx) => (
                <li
                  className="opacity-0 py-3 px-5 transition-transform duration-[var(--duration)] translate-y-[-50%] text-darkTeritary hover:bg-darkGray pointer-events-auto"
                  role="option"
                  aria-selected="true"
                  key={platform.id}
                  style={
                    {
                      "--duration": `${500 + 100 * idx}ms`,
                    } as React.CSSProperties
                  }
                  onClick={(e) => {
                    platformClickHandler(e, platform);
                  }}
                >
                  {platform.name}
                </li>
              ))}
          </ul>
        </label>
      </div>
      <div
        className="fixed top-0 left-0 bottom-0 right-0 hidden"
        id="dropbox-restarea"
        onClick={(e) => {
          const checkBox = document.getElementById("drop-checkbox");
          if (checkBox) {
            checkBox.click();
            hideBackground("none");
          }
        }}
      ></div>
    </div>
  );
};

export default PlatformSelector;
