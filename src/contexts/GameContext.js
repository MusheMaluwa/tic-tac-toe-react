import { createContext, useState } from "react";

export const GameContext = createContext({});

export const GameContextProvider = (props) => {
  // Initialize game state using useState
  const [game, setGame] = useState({
    board: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    player1:{
        choice: "X",
        mushe : "Maluwa"
    },
    player1:{
        choice: "O",
        mushe : "Mushe"
    },
    turn: "X"
  });

   const updateBoard = (index) => {
    const updateBoard = game .board ;
    updateBoard[index] = game.turn
    setGame({
        ...game,
        board: updateBoard,
        turn:game.turn ==="X"? "O" : "X"
    })
   }

  return (
    <GameContext.Provider
      value={{
        game,
        updateBoard, // Pass setGame if you need to update the game state from other components
      }}
    >
      {props.children}
    </GameContext.Provider>
  );
};
