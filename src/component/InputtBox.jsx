import "./InputBox.css";

export function InputBox({
  country,
  setCountry,
  gold,
  setGold,
  silver,
  setSilver,
  bronze,
  setBronze,
  onAdd,
  onUpdate
}) {
  return (
    <>
      <form className="inputBox">
        <div className="inputField">
          <label>국가명 </label>
          <input
            maxLength="11"
            type="text"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            placeholder="국가명 입력"
          />
        </div>
        <div className="inputField">
          <label>금메달 </label>
          <input
            type="number"
            value={gold}
            onChange={(e) => {
              const value = e.target.value;
              if (/^\d*$/.test(value)) {
                setGold(value);
              }
            }}
            placeholder="금메달 개수"
          />
        </div>
        <div className="inputField">
          <label>은메달 </label>
          <input
            type="number"
            value={silver}
            onChange={(e) => {
              const value = e.target.value;
              if (/^\d*$/.test(value)) {
                setSilver(value);
              }
            }}
            placeholder="은메달 개수"
          />
        </div>
        <div className="inputField">
          <label>동메달 </label>
          <input
            type="number"
            value={bronze}
            onChange={(e) => {
              const value = e.target.value;
              if (/^\d*$/.test(value)) {
                setBronze(value);
              }
            }}
            placeholder="동메달 개수"
          />
        </div>
        <div className="btnBox">
          <button type="button" onClick={onAdd}>
            국가추가
          </button>
          <button type="button" onClick={onUpdate}>
            업데이트
          </button>
        </div>
      </form>
    </>
  );
}
