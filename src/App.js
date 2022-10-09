import "./App.css";

import { RecoilRoot } from "recoil";
import Game from "./Game";
import Score from "./Score";
import Gems from "./Gems";
import HighScore from "./HighScore";
import React from "react";

function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <h1>Pagper Game!</h1>
        <React.Suspense fallback={<div>Loading...</div>}>
          <HighScore />
        </React.Suspense>
        <Score />
        <Game />
        <Gems />
      </div>
    </RecoilRoot>
  );
}

export default App;
