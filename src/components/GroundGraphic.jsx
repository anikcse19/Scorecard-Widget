import { Clock, MapPin } from "lucide-react";

export default function GroundGraphic({
  status,
  resultText,
  competition,
  date,
  teams,
  scores,
  venue,
}) {
  return (
    <div className="font-sans h-[500px] relative">
      {/* Header */}
      <div className="flex items-center bg-green-900 text-white px-4 py-3 h-[50px]">
        <Clock className="w-10 h-10 mr-2" />
        <div className="flex flex-col">
          <h4 className="text-sm font-bold uppercase mr-2">{status}</h4>
          <span className="text-xs">{resultText}</span>
        </div>
      </div>

      {/* Cricket Ground & Score */}
      <div className="relative bg-green-600 h-[400px]">
        {/* Circular boundary lines */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="absolute rounded-full border border-white opacity-30 w-56 h-56"></div>
          <div className="absolute rounded-full border border-white opacity-30 w-72 h-72"></div>
        </div>

        {/* Pitch */}
        <div className="absolute left-1/2 bottom-44 transform -translate-x-1/2 w-4 h-32 bg-yellow-700 rounded-sm"></div>

        {/* Scorecard */}
        <div className="absolute left-1/2 top-1/3 transform -translate-x-1/2 bg-green-900 p-4 rounded-lg text-center text-white">
          <div className="text-xs uppercase font-bold mb-1">Final Score</div>
          <div className="flex items-center justify-center space-x-4">
            <div className="bg-white text-black px-2 py-1 rounded text-sm font-semibold">
              {`${scores[0]?.tI?.r}/${scores[0]?.tI?.w}`}
            </div>
            <span className="text-lg font-bold">:</span>
            <div className="bg-white text-black px-2 py-1 rounded text-sm font-semibold">
              {scores[1]
                ? `${scores[1]?.tI?.r}/${scores[1]?.tI?.w}`
                : "Yet to Bat"}
            </div>
          </div>
          <div className="flex justify-between text-xs uppercase text-gray-300 mt-2">
            <span>{teams.t1?.s}</span>
            <span>{teams.t2.s}</span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between bg-green-900 text-white px-4 py-3 h-[50px]">
        <div className="text-xs">
          <span className="font-bold">{competition}</span>
          <span className="mx-1">|</span>
          <span>{date}</span>
        </div>
        <div className="flex items-center text-xs">
          <MapPin className="w-4 h-4 mr-1" />
          <span>{venue}</span>
        </div>
      </div>
    </div>
  );
}

// Example usage:
// <CricketMatchWidget
//   status="MATCH ENDED"
//   resultText="Lucknow Super Giants won by 12 runs"
//   competition="Premier League"
//   date="Friday, 4 April"
//   finalScore={{ teamA: '203/8', teamB: '191/5' }}
//   teams={{ teamA: 'LSG', teamB: 'MI' }}
//   venue="N/A"
// />
