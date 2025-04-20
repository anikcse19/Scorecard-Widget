import GroundGraphic from "./GroundGraphic";

const Info = () => {
  const matchData = {
    result: "MATCH ENDED",
    winner: "Lucknow Super Giants won by 12 runs",
    date: "Friday, 4 April",
    scores: {
      LSG: "203/8",
      MI: "191/5",
    },
  };
  return (
    <div className="flex flex-col md:flex-row bg-[#0D0D2B] text-white">
      {/* left */}
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
      <div className="bg-[#0F1234] md:w-1/2 px-6 text-white font-sans">
        <div className="flex justify-between border-b border-white/10 text-sm font-bold uppercase text-white">
          <span className="text-[8px]">Lineups</span>
        </div>

        <div className="flex justify-between">
          <div className="w-1/2 pr-4">
            <h2 className="text-white font-semibold text-sm mb-1 border-b border-t border-white">
              Lucknow Super Giants
            </h2>

            <ul className="space-y-1 text-[9px]">
              <li>
                <span className="text-white font-medium">Markram, Aiden</span>
                <br />
                <span className="text-white/60 text-[9px] uppercase">
                  All Rounder
                </span>
              </li>
              <li>
                <span className="text-white font-medium">Marsh, Mitchell</span>
                <br />
                <span className="text-white/60 text-[9px] uppercase">
                  All Rounder
                </span>
              </li>
              <li>
                <span className="text-white font-medium">Pooran, Nicholas</span>
                <br />
                <span className="text-white/60 text-[9px] uppercase">
                  Wicketkeeper
                </span>
              </li>
              <li>
                <span className="text-white font-medium">
                  Pant, Rishabh <span className="text-red-500">Ⓒ 🧤</span>
                </span>
                <br />
                <span className="text-white/60 text-[9px] uppercase">
                  Wicketkeeper
                </span>
              </li>
              <li>
                <span className="text-white font-medium">Badoni, Ayush</span>
                <br />
                <span className="text-white/60 text-[9px] uppercase">
                  Batter
                </span>
              </li>
              <li>
                <span className="text-white font-medium">Miller, David</span>
                <br />
                <span className="text-white/60 text-[9px] uppercase">
                  Batter
                </span>
              </li>
              <li>
                <span className="text-white font-medium">Samad, Abdul</span>
                <br />
                <span className="text-white/60 text-[9px] uppercase">
                  Batter
                </span>
              </li>
              <li>
                <span className="text-white font-medium">Thakur, Shardul</span>
                <br />
                <span className="text-white/60 text-[9px] uppercase">
                  All Rounder
                </span>
              </li>
              <li>
                <span className="text-white font-medium">
                  Singh Rathi, Divesh
                </span>
                <br />
                <span className="text-white/60 text-[9px] uppercase">
                  Bowler
                </span>
              </li>
              <li>
                <span className="text-white font-medium">Deep, Akash</span>
                <br />
                <span className="text-white/60 text-[9px] uppercase">
                  Bowler
                </span>
              </li>
              <li>
                <span className="text-white font-medium">Khan, Avesh</span>
                <br />
                <span className="text-white/60 text-[9px] uppercase">
                  Bowler
                </span>
              </li>
            </ul>
          </div>

          <div className="w-1/2 pl-4">
            <h2 className="text-white font-semibold text-sm mb-1 border-b border-t border-white">
              Mumbai Indians
            </h2>

            <ul className="space-y-1 text-[9px]">
              <li>
                <span className="text-white font-medium">Jacks, Will</span>
                <br />
                <span className="text-white/60 text-[9px] uppercase">
                  Batter
                </span>
              </li>
              <li>
                <span className="text-white font-medium">
                  Ricketton, Ryan <span className="text-red-500">🧤</span>
                </span>
                <br />
                <span className="text-white/60 text-[9px] uppercase">
                  Wicketkeeper
                </span>
              </li>
              <li>
                <span className="text-white font-medium">
                  Yadav, Suryakumar
                </span>
                <br />
                <span className="text-white/60 text-[9px] uppercase">
                  Batter
                </span>
              </li>
              <li>
                <span className="text-white font-medium">
                  Pandya, Hardik <span className="text-red-500">Ⓒ</span>
                </span>
                <br />
                <span className="text-white/60 text-[9px] uppercase">
                  All Rounder
                </span>
              </li>
              <li>
                <span className="text-white font-medium">Dhir, Naman</span>
                <br />
                <span className="text-white/60 text-[9px] uppercase">
                  Bowler
                </span>
              </li>
              <li>
                <span className="text-white font-medium">Bawa, Raj Angad</span>
                <br />
                <span className="text-white/60 text-[9px] uppercase">
                  All Rounder
                </span>
              </li>
              <li>
                <span className="text-white font-medium">
                  Santner, Mitchell
                </span>
                <br />
                <span className="text-white/60 text-[9px] uppercase">
                  All Rounder
                </span>
              </li>
              <li>
                <span className="text-white font-medium">Boult, Trent</span>
                <br />
                <span className="text-white/60 text-[9px] uppercase">
                  Bowler
                </span>
              </li>
              <li>
                <span className="text-white font-medium">Kumar, Ashwani</span>
                <br />
                <span className="text-white/60 text-[9px] uppercase">
                  Batter
                </span>
              </li>
              <li>
                <span className="text-white font-medium">Chahar, Deepak</span>
                <br />
                <span className="text-white/60 text-[9px] uppercase">
                  Bowler
                </span>
              </li>
              <li>
                <span className="text-white font-medium">Puthur, Vignesh</span>
                <br />
                <span className="text-white/60 text-[9px] uppercase">
                  Batter
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
