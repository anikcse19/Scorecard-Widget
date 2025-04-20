import { useState } from "react";

const inningsData: Record<string, number[]> = {
  "LSG INNS": [2, 3, 9, 17, 19, 20],
  "MI INNS": [1, 4, 7, 13, 18],
};

export default function OverProgression() {
  const [activeInnings, setActiveInnings] = useState("MI INNS");
  const overs = Array.from({ length: 21 }, (_, i) => i); // 0 to 20

  return (
    <div className="bg-[#0D0D2B] text-white px-4 py-0.5 border-b border-t border-white/10">
      <div className="flex gap-4">
        {/* Inning Buttons */}
        <div className="flex flex-col gap-2">
          {Object.keys(inningsData).map((team) => (
            <button
              key={team}
              onClick={() => setActiveInnings(team)}
              className={`px-3 py-1 text-xs font-semibold rounded ${
                activeInnings === team
                  ? "bg-[#FF2E63] text-white"
                  : "border border-white"
              }`}
            >
              {team}
            </button>
          ))}
        </div>

        {/* Graph */}
        <div className="flex-1">
          <div className="flex items-end h-20">
            {overs.map((over, idx) => (
              <div key={idx} className="flex flex-col items-center flex-1">
                {/* Wicket icon */}
                {inningsData[activeInnings].includes(over) ? (
                  <div className="text-[10px] text-[#FF2E63] font-bold mb-1">
                    W
                  </div>
                ) : (
                  <div className="h-[10px] mb-1" /> // spacer
                )}

                {/* Vertical dashed line */}
                <div className="w-px flex-1 border-l border-dashed border-gray-500 opacity-40" />

                {/* Over number */}
                <div className="text-[10px] text-gray-400 mt-1 ">{over}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
