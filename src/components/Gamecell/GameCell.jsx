import React, { useContext } from "react";
import { CellStyle } from "./GameCellStyle";
import { GameContext } from "../../contexts/GameContext";
import { ModalContext } from "../../contexts/ModalContext";
import RoundOverModal from "../Modal/Modals/RoundOverModal/RoundOverModal";
import { checkForWinner } from "../../utils/GameUtils";
import { ReactComponent as IconX } from "../../assets/svgs/x.svg";
import { ReactComponent as IconOutlineX } from "../../assets/svgs/outlineX.svg";
import { ReactComponent as IconO } from "../../assets/svgs/o.svg";
import { ReactComponent as IconOutlineO } from "../../assets/svgs/outlineO.svg";


function GameCell({ cellItem, index }) {
  const { updateBoard, game, roundComplete } = useContext(GameContext);
  const { handleModal } = useContext(ModalContext);

  const cellClickHandler = () => {
    updateBoard(index);
    const result = checkForWinner(game.board)
    if (result) {
      roundComplete(result)
      handleModal(<RoundOverModal />);
    }
  };
  if (cellItem === "X") {
    return (
      <CellStyle className="IconX">
        <IconX />
      </CellStyle>
    );
  } else if (cellItem === "O") {
    return (
      <CellStyle className="IconO">
        <IconO />
      </CellStyle>
    );
  } else
    return (
      <CellStyle onClick={cellClickHandler}>
        {game.turn === "X" ? (
          <IconOutlineX className="outlineIconX" />
        ) : (
          <IconOutlineO className="outlineIconO" />
        )}
      </CellStyle>
    );
}

export default GameCell;
