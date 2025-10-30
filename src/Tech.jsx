import ht from "./images/html.svg";
import icon2 from "./images/css.svg";
import icon3 from "./images/js.svg";
import icon4 from "./images/react.png";
import icon5 from "./images/vite.png";
import icon6 from "./images/tail.png";
import icon7 from "./images/boot.svg";
import icon8 from "./images/vs.svg";
import icon9 from "./images/vercal.png";
import icon10 from "./images/github.png";
import icon11 from "./images/figma.png";
import icon12 from "./images/ps.png";
import icon13 from "./images/ill.png";

export default function Tech() {
  const icons = [
    // Row 1 (empty)
    Array(13).fill(null),
    // Row 2 (empty)
    Array(13).fill(null),
    // Row 3 (centered icons)
    [null, null, null, ht, icon2, icon3, icon4, icon5, icon6, icon7, null, null, null],
    // Row 4 (centered icons)
    [null, null, icon8, icon9, icon10, icon11, icon12, icon13, null, null, null, null, null],
    // Row 5 (empty)
    Array(13).fill(null),
  ].flat();

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-semibold text-gray-200 text-center mb-16">
        Powering your favorite <br /> frameworks and tools
      </h1>

      {/* Center Wrapper */}
      <div className="flex items-center justify-center w-full h-full">
        {/* Grid */}
        <div className="grid grid-cols-13 gap-6 max-w-[90rem] mx-auto px-10 place-items-center">
          {icons.map((icon, i) => (
            <div
              key={i}
              className={`aspect-square w-20 md:w-24 lg:w-28 rounded-2xl flex items-center justify-center transition-all duration-300
                ${
                  icon
                    ? "bg-[#11121b]/80 backdrop-blur-md border border-white/10 shadow-[inset_0_0_25px_rgba(255,255,255,0.06)] hover:scale-105 hover:shadow-[0_0_25px_rgba(255,255,255,0.25)]"
                    : "bg-[#11121b]/60 border border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.08)] opacity-70"
                }`}
            >
              {icon && (
                <img
                  src={icon}
                  alt={`icon-${i}`}
                  className="w-12 h-12 md:w-16 md:h-16 object-contain drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] transition-all duration-300 hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]"
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
    </div>
  );
}
