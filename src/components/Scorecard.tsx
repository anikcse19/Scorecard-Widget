import React from "react";
import GroundGraphic from "./GroundGraphic";
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
  ] as [string, string, string, string, string],
};

const batsmen = [
  {
    name: "Jacks, Will",
    score: "5",
    balls: "7",
    fours: "0",
    sixes: "0",
    sr: "71.43",
    out: "c R. Bishnoi b A. Deep",
  },
  {
    name: "Rickelton, Ryan",
    score: "10",
    balls: "5",
    fours: "2",
    sixes: "0",
    sr: "200.00",
    out: "c R. Bishnoi b S. Thakur",
  },
  {
    name: "Dhir, Naman",
    score: "46",
    balls: "24",
    fours: "4",
    sixes: "3",
    sr: "191.67",
    out: "b D. Singh Rathi",
  },
  {
    name: "Yadav, Suryakumar",
    score: "67",
    balls: "43",
    fours: "9",
    sixes: "1",
    sr: "155.81",
    out: "c A. Samad b A. Khan",
  },
  {
    name: "Varma, Tilak",
    score: "25",
    balls: "23",
    fours: "2",
    sixes: "0",
    sr: "108.70",
    out: "retired out b S. Thakur",
  },
  {
    name: "Pandya, Hardik",
    score: "28",
    balls: "16",
    fours: "2",
    sixes: "1",
    sr: "175.00",
    out: "NOT OUT",
  },
  {
    name: "Santner, Mitchell",
    score: "2",
    balls: "2",
    fours: "0",
    sixes: "0",
    sr: "100.00",
    out: "NOT OUT",
  },
];

export default function Scorecard() {
  return (
    <div className="flex flex-col md:flex-row md:items-start bg-[#0D0D2B] text-white h-full">
      {/* Left side */}
      <div className="md:w-1/2 flex-grow h-[500px]">
        <GroundGraphic
          status={matchData.result}
          resultText={matchData.winner}
          date={matchData.date}
          finalScore={{
            teamA: matchData.scores.LSG,
            teamB: matchData.scores.MI,
          }}
        />
      </div>
      {/* Right side - Scorecard */}
      <div className="md:w-1/2 bg-[#0D0D2B] px-4 h-[500px] overflow-y-auto custom_scrollbar">
        <div className="border-b border-white/20 pb-2 mb-4">
          <h3 className="text-xl font-bold text-[#FF2E63]">MI INNS</h3>
        </div>

        {/* Scorecard Table */}
        <div className="grid grid-cols-6 gap-2 text-sm font-semibold text-gray-400 border-b border-white/10 pb-1">
          <div>BATTER</div>
          <div>R</div>
          <div>B</div>
          <div>4s</div>
          <div>6s</div>
          <div>S/R</div>
        </div>

        {batsmen.map((b, idx) => (
          <div
            key={idx}
            className="grid grid-cols-6 gap-2 py-2 border-b border-white/5 text-sm"
          >
            <div>
              <span className="font-semibold text-white">{b.name}</span>
              <div className="text-xs text-gray-400">{b.out}</div>
            </div>
            <div>{b.score}</div>
            <div>{b.balls}</div>
            <div>{b.fours}</div>
            <div>{b.sixes}</div>
            <div>{b.sr}</div>
          </div>
        ))}

        {/* Extras */}
        <div className="py-2 text-sm">
          <span className="font-semibold text-white">Extras</span>: 8{" "}
          <span className="text-gray-400">(b: 0, lb: 4, nb: 0, w: 4)</span>
        </div>

        {/* Total */}
        <div className="py-2 text-sm font-bold text-white">
          Total: 191/5 (20 Ov, RR 9.55)
        </div>

        {/* Fall of Wickets */}
        <div className="py-2 text-sm">
          <span className="font-semibold text-white">Fall of wickets</span>:
          <br />
          <div className="text-gray-300 text-xs mt-1 space-y-1">
            {matchData.fallOfWickets.map((item, idx) => (
              <div key={idx}>{item}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
