import React, { useContext } from "react";
import { Title, Subtitle } from "../../../styles/General.styled";
import { ModalHeader, ModalBody, ModalFooter } from "../../Modal/Modal.styled";
import Button from '../../Button/Button.styled'
import { GameContext } from "../../../contexts/GameContext";
import { ModalContext } from "../../../contexts/ModalContext";

const {resetBoard} = useContext(GameContext)
const {handleModal} = useContext(ModalContext)


function RoundOverModal() {
  return (
    <>
      <ModalHeader>
        <Title primary>Mushe wins round</Title>
      </ModalHeader>

      <ModalBody>
        <Subtitle primary>Mushe won this round! Choices will be switch</Subtitle>
        <Subtitle primary>Mushe with X:1</Subtitle>
        <Subtitle primary>Linde with O:1</Subtitle>
      </ModalBody>

      <ModalFooter>
          <Button color="#f9c811" onClick={() => {
            handleModal();
            resetBoard()
          }}>Continue</Button>
          <Button color="#8437f9" >Restart</Button>
      </ModalFooter>
    </>
  );
}

export default RoundOverModal;
