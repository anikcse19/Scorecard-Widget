import React, { useState } from "react";
import GroundGraphic from "./GroundGraphic";
import useStore from "../zustand/useStore";

const matchData = {
  result: "MATCH ENDED",
  winner: "Lucknow Super Giants won by 12 runs",
  date: "Friday, 4 April",
  scores: {
    LSG: "203/8",
    MI: "191/5",
  },
  fallOfWickets: [
    "1 - 11 (W. Jacks, 1.4 ov)",
    "2 - 17 (R. Rickelton, 2.2 ov)",
    "3 - 86 (N. Dhir, 8.1 ov)",
    "4 - 152 (S. Yadav, 16.1 ov)",
    "5 - 180 (T. Varma, 18.5 ov)",
  ],
};

export default function Scorecard({ data, activeInnings, setActiveInnings }) {
  const [selectedInning, setSelectedInning] = useState(
    activeInnings || data?.teams?.t1?.s
  );

  const { setRefreshScorecard } = useStore();
  console.log(data, "scorecard data");

  console.log(selectedInning, "selected inning scorecard");
  const currentBattingTeams = data?.innO?.find(
    (inn) => inn.tI.s === selectedInning
  );

  function calculateRunRate(runs, overs) {
    // Extract full overs and balls from the overs input (e.g., 16.4)
    const fullOvers = Math.floor(overs);
    const balls = Math.round((overs - fullOvers) * 10); // because .4 = 4 balls

    // Total overs in decimal form
    const totalOvers = fullOvers + balls / 6;

    // Calculate run rate
    const runRate = runs / totalOvers;

    return `CRR ${runRate.toFixed(2)}`; // round to 2 decimal places
  }

  return (
    <div className="flex flex-col md:flex-row md:items-start bg-[#0D0D2B] text-white h-full overflow-y-auto custom_scrollbar">
      {/* Left side */}
      <div className="md:w-1/2 flex-grow h-full">
        <GroundGraphic
          status={data?.rl ? "MATCH ENDED" : "In Play"}
          resultText={data?.rl ? data?.rl?.msg : ""}
          date={matchData.date}
          teams={data?.teams}
          scores={data?.innO}
        />
      </div>
      {/* Right side - Scorecard */}
      <div className="md:w-1/2 bg-[#0D0D2B] px-4 h-full overflow-y-auto custom_scrollbar mb-20">
        <div className="text-right mt-1">
          <button
            onClick={() => setRefreshScorecard()}
            className="border-2 border-blue-600 px-3 py-0.5"
          >
            Refresh
          </button>
        </div>
        <div className="flex items-center gap-x-4 my-3">
          <button
            onClick={(e) => setSelectedInning(data?.teams?.t1?.s)}
            className={` ${
              selectedInning === data?.teams?.t1?.s
                ? "border-2 border-purple-600 px-4 py-0.5"
                : ""
            }`}
          >
            {data?.teams?.t1?.s} INNS
          </button>
          <button
            onClick={(e) => setSelectedInning(data?.teams?.t2?.s)}
            className={` ${
              selectedInning === data?.teams?.t2?.s
                ? "border-2 border-purple-600 px-4 py-0.5"
                : ""
            }`}
          >
            {data?.teams?.t2?.s} INNS
          </button>
        </div>

        <div className="border-b border-white/20 pb-2 mb-4">
          <h3 className="text-xl font-bold text-[#FF2E63]">
            {selectedInning} INNS
          </h3>

          {/* Total */}
          <div className="py-2 text-sm font-bold text-white">
            {currentBattingTeams
              ? `${currentBattingTeams?.tI?.r}/${currentBattingTeams?.tI?.w} (${
                  currentBattingTeams?.tI?.ov
                } Ov, ${calculateRunRate(
                  currentBattingTeams?.tI?.r,
                  currentBattingTeams?.tI?.ov
                )})`
              : "YTB"}
          </div>
        </div>

        {/* Scorecard Table */}

        {/* batsmen table */}
        <div className="grid grid-cols-6 gap-2 text-sm font-semibold text-gray-400 border-b border-white/10 pb-1">
          <div>BATTER</div>
          <div>R</div>
          <div>B</div>
          <div>4s</div>
          <div>6s</div>
          <div>S/R</div>
        </div>

        {currentBattingTeams?.bt?.map((b, idx) => (
          <div
            key={idx}
            className="grid grid-cols-6 gap-2 py-2 border-b border-white/5 text-sm"
          >
            <div>
              <span className="font-semibold text-sm text-white">{b?.n}</span>
              <div className="text-xs text-gray-400">
                {b?.outS ? b?.outS : "batting"}
              </div>
            </div>
            <div>{b?.r}</div>
            <div>{b?.b}</div>
            <div>{b?._4}</div>
            <div>{b?._6}</div>
            <div>{b?.sr}</div>
          </div>
        ))}

        {/* Extras */}
        <div className="py-2 text-sm">
          <span className="font-semibold text-white">Extras</span>:{" "}
          {currentBattingTeams?.tI?.ex} {""}
          <span className="text-gray-400">{`(${currentBattingTeams?.tI?.exI})`}</span>
        </div>

        {/* yet to bat */}
        <div className="py-2 text-sm">
          <span className="font-semibold text-white">Yet to bat</span>:
          <br />
          <div className="text-gray-300 text-xs mt-1 space-y-1">
            {currentBattingTeams?.yb?.map((item, idx) => (
              <div className="flex items-center gap-1" key={idx}>
                <p>{`(${item?.n},`}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Fall of Wickets */}
        <div className="py-2 text-sm">
          <span className="font-semibold text-white">Fall of wickets</span>:
          <br />
          <div className="text-gray-300 text-xs mt-1 space-y-1">
            {currentBattingTeams?.fow?.map((item, idx) => (
              <div className="flex items-center gap-1" key={idx}>
                <p>{item?.sc}</p>
                <p>{`(${item?.n}, ${item?.ov})`}</p>
              </div>
            ))}
          </div>
        </div>

        {/* bowler table */}
        <div className="grid grid-cols-6 gap-2 text-sm font-semibold text-gray-400 border-b border-white/10 pb-1">
          <div>BOWLER</div>
          <div>O</div>
          <div>M</div>
          <div>R</div>
          <div>W</div>
          <div>E</div>
        </div>

        {currentBattingTeams?.bw?.map((b, idx) => (
          <div
            key={idx}
            className="grid grid-cols-6 gap-2 py-2 border-b border-white/5 text-sm"
          >
            <div>
              <span className="font-semibold text-sm text-white">{b?.n}</span>
            </div>
            <div>{b?.ov}</div>
            <div>{b?.mdn}</div>
            <div>{b?.r}</div>
            <div>{b?.w}</div>
            <div>{b?.er}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
