import { ChessBoard } from "./canvas-module.js";

const canvas = document.querySelector('canvas'),
  chessBoard = new ChessBoard(canvas);

chessBoard.start();

chessBoard.onClick();