import React, { useState } from "react";

function CalculatorComponent(props) {
  const [numberOne, setNumberOne] = useState("");
  const [numberTwo, setNumberTwo] = useState("");
  const [operator, setOperator] = useState("");
  const [result, setResult] = useState("");

  function handleNumberOneChange(e) {
    setNumberOne(e.target.value);
  }

  function handleNumberTwoChange(e) {
    setNumberTwo(e.target.value);
  }

  function handleOperatorChange(e) {
    setOperator(e.target.value);
  }

  function calculate() {
    let newResult;
    switch (operator) {
      case "+":
        newResult = parseFloat(numberOne) + parseFloat(numberTwo);
        break;
      case "-":
        newResult = parseFloat(numberOne) - parseFloat(numberTwo);
        break;
      case "*":
        newResult = parseFloat(numberOne) * parseFloat(numberTwo);
        break;
      case "/":
        if (parseFloat(numberTwo) === 0) {
          alert("Không thể chia cho 0.");
          return;
        }
        newResult = parseFloat(numberOne) / parseFloat(numberTwo);
        break;
      default:
        alert("Vui lòng chọn một toán tử hợp lệ.");
        return;
    }
    setResult(newResult);
  }

  function handleCalculateClick() {
    calculate();
  }

  function handleClearClick() {
    setNumberOne("");
    setNumberTwo("");
    setOperator("");
    setResult("");
  }

  return (
    <div>
      <label htmlFor="numberOne">Số thứ nhất:</label>
      <input type="number" id="numberOne" value={numberOne} onChange={handleNumberOneChange}/>

      <label htmlFor="operator">Phép tính:</label>
      <select id="operator" value={operator} onChange={handleOperatorChange}>
        <option value="">Vui lòng chọn</option>
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
      </select>

      <label htmlFor="numberTwo">Số thứ hai:</label>
      <input
        type="number" id="numberTwo" value={numberTwo} onChange={handleNumberTwoChange}/>
      <h3>Kết quả: {result}</h3>
      <button onClick={handleCalculateClick}>Tính toán</button>
      <button onClick={handleClearClick}>Xóa</button>
    </div>
  );
}

export default CalculatorComponent;
