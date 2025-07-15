import './SnakeApp.css';
import { useEffect, useState } from 'react';

const gridSize = 10;
const boardSize = 500;

function getRandom() {
  return Math.floor(Math.random() * (boardSize / gridSize)) * gridSize;
}

export default function SnakeApp() {
  const [snake, setSnake] = useState([{ x: 240, y: 240 }]);
  const [direction, setDirection] = useState("");
  const [food, setFood] = useState({ x: getRandom(), y: getRandom() });
  const [points, setPoints] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  // Movement Logic
  const moveSnake = () => {
    setSnake(prev => {
      const head = { ...prev[0] };
      if (direction === 'ArrowUp') head.y -= gridSize;
      if (direction === 'ArrowDown') head.y += gridSize;
      if (direction === 'ArrowLeft') head.x -= gridSize;
      if (direction === 'ArrowRight') head.x += gridSize;

      // Wall Collision
      if (
        head.x < 0 || head.x >= boardSize ||
        head.y < 0 || head.y >= boardSize ||
        prev.some(part => part.x === head.x && part.y === head.y)
      ) {
        setGameOver(true);
        return prev;
      }

      const newSnake = [head, ...prev];

      // Eat food
      if (head.x === food.x && head.y === food.y) {
        setPoints(p => p + 5);
        setFood({ x: getRandom(), y: getRandom() });
      } else {
        newSnake.pop(); // keep length unless food eaten
      }

      return newSnake;
    });
  };

  useEffect(() => {
    if (gameOver || !direction) return;
    const interval = setInterval(moveSnake, 150);
    return () => clearInterval(interval);
  }, [direction, gameOver]);

  // Arrow key control
  useEffect(() => {
    const handleKey = (e) => {
      const valid = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"];
      if (valid.includes(e.key)) setDirection(e.key);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  const restartGame = () => {
    setSnake([{ x: 240, y: 240 }]);
    setDirection("");
    setFood({ x: getRandom(), y: getRandom() });
    setPoints(0);
    setGameOver(false);
  };

  return (
    <div className="snake-wrapper">
      <h1>🐍 Snake Game</h1>
      <h2>Score: {points}</h2>

      <div className="board">
        {snake.map((part, i) => (
          <div
            key={i}
            className="snake"
            style={{ top: part.y, left: part.x }}
          />
        ))}

        <div
          className="food"
          style={{ top: food.y, left: food.x }}
        />

        {gameOver && (
          <div className="game-over">
            <h2>💀 Game Over</h2>
            <p>Final Score: {points}</p>
            <button onClick={restartGame}>Restart</button>
          </div>
        )}
      </div>
    </div>
  );
}
