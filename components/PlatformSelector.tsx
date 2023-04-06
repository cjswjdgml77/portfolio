import usePlatforms, { Platform } from "@/hooks/usePlatforms";
import { MouseEvent, useRef } from "react";

type Props = {
  setPlatform: (platform: Platform) => void;
};

const PlatformSelector = ({ setPlatform }: Props) => {
  const dropSelector = useRef<HTMLParagraphElement>(null);
  const dropRestArea = useRef<HTMLDivElement>(null);
  const checkInput = useRef<HTMLInputElement>(null);
  const { data, error } = usePlatforms();
  if (error) return null;
  const hideBackground = (styleDisplay: string) => {
    if (!dropRestArea.current) return;
    const area = dropRestArea.current;
    if (area) area.style.display = `${styleDisplay}`;
  };

  const platformClickHandler = (e: MouseEvent, platform: Platform) => {
    if (!dropSelector.current) return;

    const selected = dropSelector.current;
    if (!selected) return null;

    const text = e.target as HTMLElement | null;
    if (!text) return;
    selected.innerHTML = text.innerText;
    hideBackground("none");
    setPlatform(platform);
  };

  return (
    <div className="h-[70px]">
      <div className="drop-container z-[10] relative pointer-events-none">
        <input
          className="drop-checkbox invisible w-0 h-0"
          type="checkbox"
          id="drop-platform"
          role="button"
          ref={checkInput}
        />
        <label className="text-darkTeritary" htmlFor="drop-platform">
          <p
            className="py-3 w-[140px] px-5 rounded-lg bg-darkGray pointer-events-auto"
            id="drop-selected"
            ref={dropSelector}
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
        ref={dropRestArea}
        onClick={(e) => {
          if (!checkInput.current) return;
          const checkBox = checkInput.current;
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
