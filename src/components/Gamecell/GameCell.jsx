import React, { useContext } from "react";
import { CellStyle } from "./GameCellStyle";
import { GameContext } from "../../contexts/GameContext";
import { checkForWinner } from "../../utils/GameUtils";

function GameCell({ cellItem, index }) {
  const { updateBoard, game } = useContext(GameContext);

  const cellClickHandler = () => {
    updateBoard (index)
    //}
    const result = checkForWinner(game.board)
//if(result){
        
  }

  return (
    <CellStyle
      onClick={cellClickHandler}
    >
      {cellItem}
    </CellStyle>
  );
}

export default GameCell;
