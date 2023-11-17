import React from "react";
import { playersJSON } from "../playersData";
import Player from "./Player";

console.log(playersJSON);

const PlayerList = () => {
  const players = JSON.parse(playersJSON);
  console.log(players);
  return (
    <div className="gap-4 justify-content-center d-flex flex-wrap mt-5">
      {players.map((item) => {
        return <Player {...item} key={item.name + item.jerseyNumber} />;
      })}
    </div>
  );
};

export default PlayerList;
