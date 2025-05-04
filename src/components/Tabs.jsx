import React, { useState } from "react";
import Scorecard from "./Scorecard";
import { HeadToHead } from "./HeadToHead";
import Info from "./Info";

const tabs = ["Scorecard", "Commentary", "Graphs", "Info"];

export default function MatchTabs({ data, activeInnings, setActiveInnings }) {
  const [activeTab, setActiveTab] = useState("Scorecard");

  return (
    <div className="w-full h-full bg-[#0D0D2B] text-white overflow-hidden">
      {/* Tab Navigation */}
      <div className="border-b border-white/10 flex justify-between overflow-x-auto w-full h-fit">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 text-sm font-semibold whitespace-nowrap w-full ${
              activeTab === tab
                ? "border-b-2 border-[#FF2E63] text-[#FF2E63]"
                : "text-gray-400 hover:text-white"
            }`}
            onClick={() => {
              if (activeTab !== "Scorecard" && tab === "Scorecard") {
                setActiveInnings(tab);
              }
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="w-full h-full">
        {activeTab === "Scorecard" && (
          <Scorecard
            data={data}
            activeInnings={activeInnings}
            setActiveInnings={setActiveInnings}
          />
        )}
        {activeTab === "Commentary" && (
          <div className="p-4 text-gray-300">
            Live commentary will appear here.
          </div>
        )}
        {activeTab === "Graphs" && (
          <div className="p-4 text-gray-300">
            <HeadToHead
              headToHead={{ teamA: 4, teamB: 1 }}
              form={{
                teamA: { percentage: 80, recent: ["W", "W", "W", "L", "W"] },
                teamB: { percentage: 60, recent: ["L", "L", "W", "W", "W"] },
              }}
            />
          </div>
        )}
        {activeTab === "Info" && <Info />}
      </div>
    </div>
  );
}
