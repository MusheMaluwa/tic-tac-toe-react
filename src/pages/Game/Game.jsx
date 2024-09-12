// Game.js
import React, { useContext } from "react";
import { Container } from "../../styles/General.styled";
import { GameBoerdStyle } from "./Game.styled";
import GameCell from "../../components/Gamecell/GameCell";
import { GameContext } from "../../contexts/GameContext";
import Player from "../../components/Player/Player";

function Game() {
  const { game } = useContext(GameContext);
  return (
    <Container>
      <Player Player={game.player1} isplayerActive={game.player1.choice === game.turn}/>
      <GameBoerdStyle>
        {game.board.map((item, index) => (
          <GameCell key={index} cellItem={item} index={index} />
        ))}
      </GameBoerdStyle>
      <Player  Player={game.player2} isplayerActive={game.player2.choice === game.turn}/>
    </Container>
  );
}

export default Game;
