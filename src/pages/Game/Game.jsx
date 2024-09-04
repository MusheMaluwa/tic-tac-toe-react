// Game.js
import React, { useContext } from "react";
import { Container } from "../../styles/General.styled";
import { GameBoerdStyle } from "./Game.styled";
import GameCell from "../../components/Gamecell/GameCell";
import { GameContext } from "../../contexts/GameContext";

function Game() {
  const { game } = useContext(GameContext);
  return (
    <Container>
      <GameBoerdStyle>
        {game.board.map((item, index) => (
          <GameCell key={index} cellItem={item} index={index} />
        ))}
      </GameBoerdStyle>
    </Container>
  );
}

export default Game;
