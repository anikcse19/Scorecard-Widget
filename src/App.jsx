import { useEffect, useState } from "react";
import MatchHeader from "./components/MatchHeader";
import OverProgression from "./components/OverProgession";
import Tabs from "./components/Tabs";
import baseUrl from "./config";
import { useParams } from "react-router-dom";

function App() {
  const [matchData, setMatchData] = useState([]);
  const [currentInning, setCurrentInning] = useState("");
  const [activeInnings, setActiveInnings] = useState("");

  const { id } = useParams();

  const fetchMatchData = async () => {
    try {
      const response = await fetch(
        `${baseUrl}/api/get-match-scoreboard?matchId=${id}`,
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

      setMatchData(data?.res);
    } catch (error) {
      console.error("Error fetching match data:", error);
    }
  };

  const findCurrentInnings = async () => {
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

      setActiveInnings(
        data?.res?.score?.i && data?.res?.score?.i.split("_")[0]
          ? data?.res?.score?.i.split("_")[0] === "t1"
            ? data?.res?.score?.teams?.t1?.s
            : data?.res?.score?.teams?.t2?.s
          : data?.res?.score?.teams?.t1?.s
      );
    } catch (error) {
      console.error("Error fetching match data:", error);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      fetchMatchData();
      findCurrentInnings();
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#0A0A23] min-h-screen text-white font-sans">
      {matchData.innO?.length > 0 && (
        <>
          <MatchHeader
            // data={matchData ? matchData : []}
            result={matchData ? matchData?.rl : {}}
            id={id}
          />
          <OverProgression
            id={id}
            data={matchData}
            activeInnings={activeInnings}
            setActiveInnings={setActiveInnings}
            currentInning={currentInning}
          />
          {/* <Tabs data={matchData} /> */}
        </>
      )}
    </div>
  );
}

export default App;
