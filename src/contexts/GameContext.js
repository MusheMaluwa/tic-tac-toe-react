import { createContext, useState } from "react";
import { genConfig } from "react-nice-avatar";

export const GameContext = createContext({});

export const GameContextProvider = (props) => {
  // Initialize game state using useState
  const [game, setGame] = useState({
    board: [null, null, null, null, null, null, null, null, null],
    player1: {
      choice: "X",
      name: "Maluwa",
      score: 0,
      color: "#8437f9",
      avaterConfig: genConfig(),
    },
    player2: {
      choice: "O",
      name: "Mushe",
      score: 0,
      color: "#f9c811",
      avaterConfig: genConfig(),
    },
    turn: "X",
    roundWinner: "",
  });

  const updateBoard = (index) => {
    const updateBoard = game.board;
    updateBoard[index] = game.turn;
    setGame({
      ...game,
      board: updateBoard,
      turn: game.turn === "X" ? "O" : "X",
    });
  };

  const resetBoard = () => {
    setGame({
      ...game,
      board: [null, null, null, null, null, null, null, null, null],
      turn: "X",
    });
  };
  const toggleChooice = (choice) => (choice === "X" ? "O" : "X");

  const switchTurn = () => {
    setGame((prevGame) => ({
      ...prevGame,
      player1: {
        ...prevGame.player1,
        choice: toggleChooice(prevGame.player1.choice),
      },
      player2: {
        ...prevGame.player2,
        choice: toggleChooice(prevGame.player2.choice),
      },
      turn: "X",
    }));
  };
  const updateScore = (winner) => {
    // winner is always going to be:
    // player1, player2, player3
    if (winner === "draw") {
      setGame((prevGame) => ({
        ...prevGame,
        player1: {
          ...prevGame.player1,
          score: prevGame.player1.score + 0.5,
        },
        player2: {
          ...prevGame.player2,
          score: prevGame.player2.score + 0.5,
        },
        roundWinner: "",
      }));
    } else {
      setGame((prevGame) => ({
        ...prevGame,
        [winner]: {
          ...prevGame[winner],
          score: prevGame[winner].score + 1,
        },
        roundWinner: prevGame[winner],
      }));
    }
  };
  const roundComplete = (result) => {
    if (game.turn === game.player1.choice && result !== "draw") {
      updateScore("player1");
    } else if (game.turn === game.player2.choice && result !== "draw") {
      updateScore("player1");
    } else {
      console.log("DRAW");
    }
    switchTurn();
  };

  return (
    <GameContext.Provider
      value={{
        game,
        updateBoard, // Pass setGame if you need to update the game state from other components
        resetBoard,
        roundComplete,
      }}
    >
      {props.children}
    </GameContext.Provider>
  );
};
