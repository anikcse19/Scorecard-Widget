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

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     fetchMatchData();
  //   }, 1000);

  //   return () => clearInterval(interval);
  // }, [id]);
  useEffect(() => {
    fetchMatchData();
  }, []);

  // console.log(currentInning, "currentInning");
  // console.log(data, "data");

  return (
    <div className="bg-[#0D0D2B] text-white flex justify-between items-center px-4 py-2 text-sm w-full">
      {/* Left - Team 1 Info */}
      <div>
        <div className="font-semibold">
          {currentInning
            ? currentInning === "i1"
              ? data?.score?.teams?.t1?.n
              : data?.score?.teams?.t2?.n
            : data?.score?.teams?.t1.n}
        </div>
        <div className="text-xs text-gray-300">{result?.msg}</div>
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
                  ? `${data?.score?.teams?.t2?.i1?.r}/${data?.score?.teams?.t2?.i1?.w} (${data?.score?.teams?.t2?.i1?.ov})`
                  : `YTB`
                : `${data?.score?.teams?.t2?.i1?.r}/${data?.score?.teams?.t2?.i1?.w} (${data?.score?.teams?.t2?.i1?.ov})`
              : "---"}
          </span>
        </div>
      </div>
      {/* Right - Team 2 Info */}
      <div className="font-semibold text-right">
        {currentInning
          ? currentInning === "i1"
            ? data?.score?.teams?.t2?.n
            : data?.score?.teams?.t1?.n
          : data?.score?.teams?.t2.n}
      </div>
    </div>
  );
};

export default MatchHeader;
