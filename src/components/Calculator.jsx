import CalculatorStyle from "./CalculatorStyle.module.css";
import { useState } from "react";
import React from "react";

export default function Calculator(props) {
  const [calc, setCalc] = React.useState("");
  const [answer, setAnswer] = React.useState("");

  const symbol = ["/", "*", "-", "+", "."];

  const createNumbers = () => {
    const numbers = [];

    for (let i = 1; i < 10; i++) {
      numbers.push(
        <button onClick={() => updateCalc(i.toString())} key={i}>
          {i}{" "}
        </button>
      );
    }

    return numbers;
  };

  const updateCalc = (value) => {
    if (
      (symbol.includes(value) && calc === "") ||
      (symbol.includes(value) && symbol.includes(calc.slice(-1)))
    ) {
      return;
    }

    setCalc(calc + value);

    if (!symbol.inlcudes(value)) {
      setAnswer(eval(calc + value).toString());
    }
  };

  const calculate = () => {
    setCalc(eval(calc).toString());
  };

  const deleteLast = () => {
    if (calc == "") {
    }

    const value = calc.slice(0, -1);

    setCalc(value);
    setAnswer(eval(value).toString());
  };

  return (
    <div className={CalculatorStyle.wrapper}>
      <div className={CalculatorStyle.calculator}>
        <div className={CalculatorStyle.header}>
          <span>{answer ? "(" + answer + ")" : ""}</span>
          {calc || 0}
        </div>

        <div className={CalculatorStyle.controls}>
          <button onClick={() => updateCalc("/")}>/</button>
          <button onClick={() => updateCalc("*")}>x</button>
          <button onClick={() => updateCalc("-")}>-</button>
          <button onClick={() => updateCalc("+")}>+</button>
          <button onClick={deleteLast}>delete</button>{" "}
        </div>
        <div className={CalculatorStyle.numbers}>
          {createNumbers()}
          <button onClick={() => updateCalc("0")}>0</button>
          <button onClick={() => updateCalc(".")}>.</button>
          <button onClick={calculate}>=</button>
        </div>
      </div>
    </div>
  );
}
