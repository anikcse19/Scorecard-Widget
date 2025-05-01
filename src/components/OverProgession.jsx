import { useEffect, useState } from "react";
import baseUrl from "../config";

export default function OverProgression({
  id,
  data,
  activeInnings,
  setActiveInnings,
  currentInning,
}) {
  const [teams, setTeams] = useState([]);
  console.log(currentInning, "currentInning");

  console.log(activeInnings, "active");
  console.log(id, "id");

  // console.log(matchData, "data");

  const findTeams = async () => {
    try {
      console.log("hiii");

      if (id) {
        const response = await fetch(
          `${baseUrl}/api/get-match-bally-ball?matchId=${id}`,
          {
            headers: {
              Accept: "application/json",
            },
          }
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log(data?.res?.score?.teams, "teams data");
        setTeams(data?.res?.score?.teams);
      }
    } catch (error) {
      console.error("Error fetching match data:", error);
    }
  };

  useEffect(() => {
    findTeams();
  }, [id]);

  console.log(teams, "teams");

  // teams names
  const team1 = teams
    ? currentInning
      ? currentInning === "t1"
        ? teams?.t1?.s
        : teams?.t2?.s
      : teams?.t1?.s
    : "--";
  const team2 = teams
    ? currentInning
      ? currentInning === "t1"
        ? teams?.t2?.s
        : teams?.t1?.s
      : teams?.t2?.s
    : "--";

  const inningsData = {
    [team1]:
      data?.innO[0]?.fow?.map((item) => Math.floor(parseInt(item.ov))) || [],
    ...(data?.innO[1] && {
      [team2]:
        data?.innO[1]?.fow?.map((item) => Math.floor(parseInt(item.ov))) || [],
    }),
  };

  console.log(inningsData, "inningsData");

  const overs = Array.from({ length: 21 }, (_, i) => i); // 0 to 20

  return (
    <div className="bg-[#0D0D2B] text-white px-4 py-0.5 border-b border-t border-white/10">
      <div className="flex gap-4">
        {/* Inning Buttons */}
        <div className="flex flex-col gap-2 my-2">
          {Object.keys(inningsData)?.map((team) => (
            <button
              key={team}
              onClick={() => setActiveInnings(team)}
              className={`px-3 py-1 text-xs font-semibold rounded ${
                activeInnings === team
                  ? "bg-[#FF2E63] text-white"
                  : "border border-white"
              }`}
            >
              {team ? team : ""} inns
            </button>
          ))}
        </div>

        {/* Graph */}
        <div className="flex-1">
          <div className="flex items-end h-20">
            {overs.map((over, idx) => (
              <div key={idx} className="flex flex-col items-center flex-1">
                {inningsData[activeInnings]?.includes(over) ? (
                  <div className="text-[10px] text-[#FF2E63] font-bold mb-1">
                    W
                  </div>
                ) : (
                  <div className="h-[10px] mb-1" />
                )}

                <div className="w-px flex-1 border-l border-dashed border-gray-500 opacity-40" />

                <div className="text-[10px] text-gray-400 mt-1 ">{over}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
