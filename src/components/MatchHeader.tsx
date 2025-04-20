const MatchHeader = () => (
  <div className="bg-[#0D0D2B] text-white flex justify-between items-center px-4 py-2 text-sm w-full">
    {/* Left - Team 1 Info */}
    <div>
      <div className="font-semibold">Lucknow Super Giants</div>
      <div className="text-xs text-gray-300">
        Lucknow Super Giants won by 12 runs
      </div>
    </div>

    {/* Center - Status & Score */}
    <div className="text-center">
      <div className="text-xs text-gray-400 uppercase">Ended</div>
      <div className="font-bold text-white text-sm">
        203/8 <span className="text-gray-400">:</span> 191/5
      </div>
    </div>

    {/* Right - Team 2 Info */}
    <div className="font-semibold text-right">Mumbai Indians</div>
  </div>
);

export default MatchHeader;
