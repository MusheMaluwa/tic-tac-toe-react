import React, { useContext } from "react";
import { Title, Subtitle } from "../../../../styles/General.styled";
import { ModalHeader, ModalBody, ModalFooter } from "../../Modal.styled";
import Button from "../../../Button/Button";
import { ModalContext } from "../../../../contexts/ModalContext";
import { GameContext } from "../../../../contexts/GameContext";

function RoundOverModal() {
  const { resetBoard, game } = useContext(GameContext);
  const { handleModal } = useContext(ModalContext);

  return (
    <>
      <ModalHeader>
        <Title primary>
          {game.roundwinner.name
            ? `${game.roundwinner.name} round`
            : "Round drawn"}
        </Title>
      </ModalHeader>
      <ModalBody>
        <Subtitle primary>Choices will be switched</Subtitle>
        <Subtitle primary>
          {game.player1.name} : {game.player1.score}
        </Subtitle>
        <Subtitle primary>
          {game.player2.name}: {game.player2.score}
        </Subtitle>
      </ModalBody>
      <ModalFooter>
        <Button
          color="#f9c811"
          onClick={() => {
            handleModal();
            resetBoard();
          }}
        >
          Continue
        </Button>
        <Button color="#8437F9">Restart</Button>
      </ModalFooter>
    </>
  );
}

export default RoundOverModal;
