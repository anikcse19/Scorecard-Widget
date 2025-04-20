import MatchHeader from "./components/MatchHeader";
import OverProgression from "./components/OverProgession";
import Tabs from "./components/Tabs";

function App() {
  return (
    <div className="bg-[#0A0A23] min-h-screen text-white font-sans">
      <MatchHeader />
      <OverProgression />
      <Tabs />
    </div>
  );
}

export default App;
