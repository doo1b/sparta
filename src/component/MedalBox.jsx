import "./MedalBox.css";

export function MedalBox({ medals, onDelete }) {
  if (medals.length === 0) {
    return <p>추가된 국가가 없습니다. 메달을 등록해보세요!</p>;
  } else
    return (
      <table>
        <thead className="category">
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
