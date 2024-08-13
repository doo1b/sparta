import { useState } from "react";

export function useMedalActions(initialMedals = []) {
  const [medals, setMedals] = useState(initialMedals);

  const countries = medals.map((e) => e.country);

  const add = (newMedal) => {
    if (emptyForm(newMedal)) return;
    countries.includes(newMedal.country)
      ? alert("해당 국가가 이미 존재합니다")
      : setMedals((medal) => [...medal, newMedal].sort((a, b) => b.gold - a.gold));
  };

  const update = (newMedal) => {
    if (emptyForm(newMedal)) return;
    !countries.includes(newMedal.country)
      ? alert("해당 국가가 존재하지 않습니다")
      : setMedals((medal) =>
          medal.map((m) => (m.country === newMedal.country ? newMedal : m)).sort((a, b) => b.gold - a.gold)
        );
  };

  const clickDel = (country) => {
    setMedals((medal) => medal.filter((m) => m.country !== country));
  };

  const emptyForm = (medal) => {
    const { country, gold, silver, bronze } = medal;
    if (country === "" || gold === "" || silver === "" || bronze === "") {
      alert("모든 항목을 입력해주세요");
      return true;
    }
    return false;
  };

  return {
    medals,
    add,
    update,
    clickDel
  };
}
