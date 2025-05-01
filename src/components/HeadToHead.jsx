import React from "react";
import { ArrowRight } from "lucide-react";
import GroundGraphic from "./GroundGraphic";

const matchData = {
  result: "MATCH ENDED",
  winner: "Lucknow Super Giants won by 12 runs",
  date: "Friday, 4 April",
  scores: {
    LSG: "203/8",
    MI: "191/5",
  },
};
export function HeadToHead({ headToHead, form }) {
  return (
    <div className="flex flex-col md:flex-row bg-[#0D0D2B] text-white">
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
      <div className="bg-[#0F1234] md:w-1/2 p-6 text-white font-sans space-y-8">
        {/* Head to Head */}
        <div>
          <h3 className="text-sm uppercase text-gray-400">Head to Head</h3>
          <h4 className="text-xs uppercase text-center text-gray-500 mt-1">
            Previous Meetings
          </h4>
          <div className="mt-4 relative h-2 bg-gray-700 rounded-full">
            <div
              className="absolute left-0 top-0 h-2 rounded-l-full bg-blue-500"
              style={{
                width: `${
                  (headToHead.teamA / (headToHead.teamA + headToHead.teamB)) *
                  100
                }%`,
              }}
            />
            <div
              className="absolute right-0 top-0 h-2 rounded-r-full bg-red-500"
              style={{
                width: `${
                  (headToHead.teamB / (headToHead.teamA + headToHead.teamB)) *
                  100
                }%`,
              }}
            />
          </div>
          <div className="mt-2 flex justify-between text-lg font-bold">
            <span className="text-blue-400">{headToHead.teamA}</span>
            <span className="text-red-400">{headToHead.teamB}</span>
          </div>
          <div className="flex justify-between text-xs uppercase text-gray-500">
            <span>wins</span>
            <span>wins</span>
          </div>
        </div>

        {/* Form */}
        <div>
          <h3 className="text-sm uppercase text-gray-400">Form</h3>
          <div className="mt-6 grid grid-cols-2 gap-6">
            {[form.teamA, form.teamB].map((team, idx) => {
              const isLeft = idx === 0;
              return (
                <div key={idx} className="flex items-center space-x-4">
                  {/* Vertical Bar */}
                  <div className="relative h-24 w-2 bg-gray-700 rounded">
                    <div
                      className={`absolute bottom-0 h-full w-full rounded ${
                        isLeft ? "bg-blue-500" : "bg-red-500"
                      }`}
                      style={{ height: `${team.percentage}%` }}
                    />
                  </div>
                  {/* Stats */}
                  <div>
                    <div
                      className={`text-2xl font-bold ${
                        isLeft ? "text-blue-400" : "text-red-400"
                      }`}
                    >
                      {team.percentage}%
                    </div>
                    <div className="text-xs uppercase text-gray-500">form</div>
                    <div className="mt-2 flex items-center space-x-1">
                      {team.recent.map((res, i) => (
                        <span
                          key={i}
                          className={`text-xs font-semibold text-white px-2 py-1 rounded ${
                            res === "W"
                              ? isLeft
                                ? "bg-blue-500"
                                : "bg-red-500"
                              : isLeft
                              ? "bg-red-500"
                              : "bg-blue-500"
                          }`}
                        >
                          {res}
                        </span>
                      ))}
                      <ArrowRight className="w-4 h-4 text-gray-500" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

// Example usage:
{
  /* <ScoreWidget
  headToHead={{ teamA: 4, teamB: 1 }}
  form={{
    teamA: { percentage: 80, recent: ['W','W','W','L','W'] },
    teamB: { percentage: 60, recent: ['L','L','W','W','W'] }
  }}
/> */
}
