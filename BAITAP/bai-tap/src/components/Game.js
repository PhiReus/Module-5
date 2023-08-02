import React, { useEffect } from "react";
import { useState } from "react";
import "../App.css";

function Game(props) {
  const [number, setNumber] = useState(0);
  const [numbers, setNumbers] = useState([]);
  const [point, setPoint] = useState(0);
  const [nextNumber, setNextNumber] = useState(1);
  const [yourscore, setYourScore] = useState(0);
  const [time, setTime] = useState(null);
  const [intervalId, setIntervalId] = useState(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    const newNumber = Array.from(Array(100).keys()).map((num) => num + 1);
    setNumbers(newNumber);

  }, []);

  useEffect(() => {
    if (time === 0) {
      clearInterval(intervalId);
      if (point > yourscore) {
        setYourScore(point);
      }
      alert(`Game Over. Your Score: ${point}`);
      setPoint(0);
      setNumber(1);
      setNextNumber(1);
      setTime(null);
      setStart(false);
      setNumbers(Array.from(Array(100).keys()).map((num) => num + 1));
    }
    // clear interval when component unmounts
    return () => clearInterval(intervalId);
  }, [time]);

  const handleNumberClick = (selectedNumber) => {
    if (!start) {
      setTime(10);
      setStart(true);
    }

    if (selectedNumber === nextNumber) {
      setPoint(point + 1);
      setNumber(nextNumber);
      setNextNumber(nextNumber + 1);
    } else {
      clearInterval(intervalId);
      if (point > yourscore) {
        setYourScore(point);
      }
      alert(`Game Over. Your Score  : ${point}`);
      setPoint(0);
      setNumber(1);
      setNextNumber(1);
      setTime(null);
      setStart(false);
      setNumbers(Array.from(Array(100).keys()).map((num) => num + 1));
    }
  };

  useEffect(() => {
    if (nextNumber > 1) {
      const newNumbers = [...numbers];
      newNumbers.sort(() => Math.random() - 0.5);
      setNumbers(newNumbers);
    }
  }, [nextNumber]);

  useEffect(() => {
    if (time !== null) {
      setIntervalId(
        setInterval(() => {
          setTime((time) => time - 1);
        }, 1000)
      );
    } else {
      clearInterval(intervalId);
    }
    return () => clearInterval(intervalId);
  }, [time]);

  const formatTime = (timeInSeconds) => {
    if (timeInSeconds === null) {
      return "Bắt đầu";
    } else if (timeInSeconds === 0) {
      return "Game Over";
    } else {
      const minutes = Math.floor(timeInSeconds / 60);
      const seconds = timeInSeconds % 60;
      const formattedMinutes = String(minutes).padStart(2, "0");
      const formattedSeconds = String(seconds).padStart(2, "0");
      return `${formattedMinutes}:${formattedSeconds}`;
    }
  };

  return (
    <div>
      <h3>Thời hạn: {time === null ? "Bắt đầu" : formatTime(time)}</h3>
      <h3>{point}</h3>
      <div className="grid">{numbers.map((num) => (
        <div
          key={num}
          className={`number ${num === number ? "active" : ""}`}
          onClick={() => handleNumberClick(num)}
        >
          {num}
        </div>
      ))}</div>
    </div>
  );
}

export default Game;