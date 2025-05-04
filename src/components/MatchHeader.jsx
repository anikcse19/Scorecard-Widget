import { useEffect, useState } from "react";
import baseUrl from "../config";

const MatchHeader = ({ id, result }) => {
  const [data, setData] = useState([]);
  const [currentInning, setCurrentInning] = useState("");

  const fetchMatchData = async () => {
    try {
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
      setCurrentInning(
        data?.res?.score?.i && data?.res?.score?.i.split("_")[0]
      );

      setData(data?.res);
    } catch (error) {
      console.error("Error fetching match data:", error);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      fetchMatchData();
    }, 1000);

    return () => clearInterval(interval);
  }, [id]);
  // useEffect(() => {
  //   fetchMatchData();
  // }, []);

  // console.log(currentInning, "currentInning");
  // console.log(data, "data");

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
    <div className="bg-[#0D0D2B] text-white flex justify-between items-center px-4 py-2 text-sm w-full">
      {/* Left - Team 1 Info */}
      <div>
        <div className="flex items-center gap-x-4">
          <div className="font-semibold text-base">
            {currentInning
              ? currentInning === "t1"
                ? data?.score?.teams?.t1?.n
                : data?.score?.teams?.t2?.n
              : data?.score?.teams?.t1.n}
          </div>
          {currentInning && (
            <div className="text-xs text-gray-400">
              {currentInning && currentInning === "t1"
                ? calculateRunRate(
                    data?.score?.teams?.t1?.i1?.r,
                    data?.score?.teams?.t1?.i1?.ov
                  )
                : calculateRunRate(
                    data?.score?.teams?.t2?.i1?.r,
                    data?.score?.teams?.t2?.i1?.ov
                  )}
            </div>
          )}
        </div>
        <div className="text-xs text-gray-300">{result?.msg}</div>
        {!result && data?.score?.tr && (
          <div>
            <p className="inline">Need more</p>{" "}
            {data?.score?.tr &&
              (currentInning === "t1"
                ? data?.score?.tr - data?.score?.teams?.t1?.i1?.r
                : data?.score?.tr - data?.score?.teams?.t2?.i1?.r)}{" "}
            <p className="inline">runs to win.</p>{" "}
          </div>
        )}
      </div>
      {/* Center - Status & Score */}
      <div className="text-center">
        <div className="text-xs text-gray-400 uppercase">
          {!result ? `In Play` : "Ended"}
        </div>
        <div className="font-bold text-sm">
          <span>
            {data?.score?.teams
              ? currentInning
                ? currentInning === "t1"
                  ? `${data?.score?.teams?.t1?.i1?.r}/${data?.score?.teams?.t1?.i1?.w} (${data?.score?.teams?.t1?.i1?.ov})`
                  : `${data?.score?.teams?.t2?.i1?.r}/${data?.score?.teams?.t2?.i1?.w} (${data?.score?.teams?.t2?.i1?.ov})`
                : `${data?.score?.teams?.t1?.i1?.r}/${data?.score?.teams?.t1?.i1?.w} (${data?.score?.teams?.t1?.i1?.ov})`
              : "---"}
          </span>{" "}
          <span className="text-gray-400">:</span>{" "}
          <span className={currentInning ? "text-gray-400" : ""}>
            {data?.score?.teams
              ? currentInning
                ? currentInning === "t1"
                  ? data?.score?.teams?.t2?.i1?.r
                    ? `${data?.score?.teams?.t2?.i1?.r}/${data?.score?.teams?.t2?.i1?.w} (${data?.score?.teams?.t2?.i1?.ov})`
                    : "YTB"
                  : data?.score?.teams?.t1?.i1?.r
                  ? `${data?.score?.teams?.t1?.i1?.r}/${data?.score?.teams?.t1?.i1?.w} (${data?.score?.teams?.t1?.i1?.ov})`
                  : "YTB"
                : `${data?.score?.teams?.t2?.i1?.r}/${data?.score?.teams?.t2?.i1?.w} (${data?.score?.teams?.t2?.i1?.ov})`
              : "---"}
          </span>
        </div>
      </div>
      {/* Right - Team 2 Info */}
      <div className="font-semibold text-right">
        {currentInning
          ? currentInning === "t1"
            ? data?.score?.teams?.t2?.n
            : data?.score?.teams?.t1?.n
          : data?.score?.teams?.t2.n}
      </div>
    </div>
  );
};

export default MatchHeader;
