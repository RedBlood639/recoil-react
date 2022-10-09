import React from "react";
import { useRecoilValue } from "recoil";
import { highScores } from "./selectors";

const HighScore = () => {
  const score = useRecoilValue(highScores);

  return <div>High Score : {score}</div>;
};

export default HighScore;
