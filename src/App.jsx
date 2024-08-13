import { useState } from "react";
import { InputBox } from "./component/InputtBox";
import { MedalBox } from "./component/MedalBox";
import { useMedalActions } from "./hooks/useMedalActions";
import "./App.css";

function App() {
  const [country, setCountry] = useState("");
  const [gold, setGold] = useState("");
  const [silver, setSilver] = useState("");
  const [bronze, setBronze] = useState("");

  const { medals, add, update, clickDel } = useMedalActions();

  const newMedal = {
    country,
    gold: gold,
    silver: silver,
    bronze: bronze
  };

  const initialize = () => {
    setCountry("");
    setGold("");
    setSilver("");
    setBronze("");
  };

  const handleAdd = () => {
    add(newMedal);
    initialize();
  };

  const handleUpdate = () => {
    update(newMedal);
    initialize();
  };

  return (
    <div className="mainBox">
      <h1>2024 파리 올림픽</h1>
      <InputBox
        country={country}
        setCountry={setCountry}
        gold={gold}
        setGold={setGold}
        silver={silver}
        setSilver={setSilver}
        bronze={bronze}
        setBronze={setBronze}
        onAdd={handleAdd}
        onUpdate={handleUpdate}
      />
      <MedalBox medals={medals} onDelete={clickDel} />
    </div>
  );
}

export default App;
