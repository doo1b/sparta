import { useState } from "react";
import "./App.css";

function App() {
  const [country, setCountry] = useState("");
  const [gold, setGold] = useState("");
  const [silver, setSilver] = useState("");
  const [bronze, setBronze] = useState("");
  const [medals, setMedals] = useState([]);
  const countries = medals.map((e) => e.country);

  const newMedal = {
    country,
    gold: Number(gold),
    silver: Number(silver),
    bronze: Number(bronze),
  };

  function addOrUpdate(add) {
    if (country === "" || gold === "" || silver === "" || bronze === "") {
      return alert("모든 항목을 입력해주세요");
    }

    add
      ? countries.includes(country)
        ? alert("해당 국가가 이미 존재합니다")
        : setMedals((medal) =>
            [...medal, newMedal].sort((a, b) => b.gold - a.gold)
          )
      : !countries.includes(country)
      ? alert("해당 국가가 존재하지 않습니다")
      : setMedals((medal) =>
          medal
            .map((medal) => (medal.country === country ? newMedal : medal))
            .sort((a, b) => b.gold - a.gold)
        );
    setCountry("");
    setGold("");
    setSilver("");
    setBronze("");
  }

  function clickDel(country) {
    setMedals((medal) => {
      const medalCountry = medal.map((m) => m.country);
      const findCountry = (e) => e === country;
      return medal.splice(medalCountry.findIndex(findCountry), 1);
    });
  }

  return (
    <div className='mainBox'>
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
        onAdd={() => addOrUpdate(true)}
        onUpdate={() => addOrUpdate(false)}
      />
      <MedalBox medals={medals} onDelete={clickDel} />
    </div>
  );
}

function InputBox({
  country,
  setCountry,
  gold,
  setGold,
  silver,
  setSilver,
  bronze,
  setBronze,
  onAdd,
  onUpdate,
}) {
  return (
    <>
      <form className='inputBox'>
        <div className='inputField'>
          <label>국가명 </label>
          <input
            maxLength='11'
            type='text'
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            placeholder='국가명 입력'
          />
        </div>
        <div className='inputField'>
          <label>금메달 </label>
          <input
            type='number'
            value={gold}
            onChange={(e) => setGold(e.target.value)}
            placeholder='금메달 개수'
          />
        </div>
        <div className='inputField'>
          <label>은메달 </label>
          <input
            type='number'
            value={silver}
            onChange={(e) => setSilver(e.target.value)}
            placeholder='은메달 개수'
          />
        </div>
        <div className='inputField'>
          <label>동메달 </label>
          <input
            type='number'
            value={bronze}
            onChange={(e) => setBronze(e.target.value)}
            placeholder='동메달 개수'
          />
        </div>
        <div className='btnBox'>
          <button type='button' onClick={onAdd}>
            국가추가
          </button>
          <button type='button' onClick={onUpdate}>
            업데이트
          </button>
        </div>
      </form>
    </>
  );
}

function MedalBox({ medals, onDelete }) {
  if (medals.length === 0) {
    return <p>추가된 국가가 없습니다. 메달을 등록해보세요!</p>;
  } else
    return (
      <table>
        <thead className='category'>
          <tr>
            <th>국가명</th>
            <th>금메달</th>
            <th>은메달</th>
            <th>동메달</th>
            <th>액션</th>
          </tr>
        </thead>
        <tbody>
          {medals.map((medal, index) => (
            <tr key={index}>
              <td>{medal.country}</td>
              <td>{medal.gold}</td>
              <td>{medal.silver}</td>
              <td>{medal.bronze}</td>
              <td>
                <button onClick={() => onDelete(medal.country)}>삭제</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
}

export default App;
