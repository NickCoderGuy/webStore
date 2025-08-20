"use client";
import { useState, useEffect, useContext } from "react";
import NavBar from "../components/navbar";
import { CoinContext } from "@/context/coinContext";
import Image from "next/image";

export default function Money() {
  const [jumping, setJumping] = useState(false);
  const [score, setScore] = useState(0);
  const [obstacleX, setObstacleX] = useState(300); 
  const [gameOver, setGameOver] = useState(false);
  const [gotCoin, setGotCoin] = useState(false);
  const [startGame, setStartGame] = useState(false);
  const {coins, setCoins} = useContext(CoinContext);

  useEffect(() => {
    if (gameOver || !startGame) return;
    const interval = setInterval(() => {
      setObstacleX((prev) => {
        if (prev <= -20) {
          setGotCoin(false);
          return 300;
        }
        return prev - 5;
      });
    }, 20);
    return () => clearInterval(interval);
  }, [gameOver, startGame]);

  useEffect(() => {
    if (gameOver || !startGame) return;

    const obstacleNear =
      obstacleX > 20 && obstacleX < 60 && !jumping;

    if (obstacleNear) {
      setGameOver(true);
      setStartGame(false);
    }

    if (obstacleX <= 19 && !obstacleNear && !gotCoin) {
      setScore((prev) => prev + 1);
      setGotCoin(true);
    }
  }, [obstacleX, jumping, gameOver, gotCoin, startGame]);

  const handleJump = () => {
    if (jumping || gameOver || !startGame) return;
    setJumping(true);
    setTimeout(() => setJumping(false), 500);
  };

  const restartGame = () => {
    setCoins(score + coins);
    setScore(0);
    setObstacleX(300);
    setGameOver(false);
  };

  return (
    <div className="bg-cream text-white w-full min-h-screen flex flex-col items-center">
      <NavBar />

      <h1 className="mt-6 text-black font-bold text-2xl font-mono">
        Fake Coins: {score}
      </h1>

      <div className="relative w-[300px] h-[220px] bg-[url('/gameBackground.png')] bg-cover bg-center border-4 border-yellow-300 mt-6 overflow-hidden">
        <Image
            src="/heroJump.png" 
            alt="Hero"
            width={60}
            height={60}
            className="absolute left-10"
            style={{
                bottom: jumping ? "80px" : "0px",
                transition: "bottom 0.3s ease",
            }}
        />
        <Image
            src="/redEnemy.png" 
            alt="Red Slime Enemy"
            width={70}
            height={70}
            className="absolute object-bottom"
            style={{
                left: `${obstacleX}px`,
                bottom: "0px",
            }}
        />
        {(!startGame && !gameOver) && (
            <button
            onClick={() => setStartGame(true)}
            className="absolute inset-0 m-auto w-1/3 h-fit bg-yellow-300 text-black px-4 py-2 font-bold hover:bg-yellow-400"
            >
            Start Game
            </button>
        )}
      </div>

      {gameOver ? (
        <div className="mt-4 text-center">
          <p className="text-red-500 font-bold">Game Over!</p>
          <button
            onClick={restartGame}
            className="mt-2 bg-yellow-300 text-black px-4 py-2 font-bold hover:bg-yellow-400"
          >
            Restart
          </button>
        </div>
      ) : (
        <button
          onClick={handleJump}
          className="mt-4 bg-yellow-300 text-black px-4 py-2 font-bold hover:bg-yellow-400"
        >
          Jump
        </button>
      )}
    </div>
  );
}
