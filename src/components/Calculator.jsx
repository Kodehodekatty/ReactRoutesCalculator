import CalculatorStyle from "./CalculatorStyle.module.css";

export default function Calculator(props) {
  const createNumbers = () => {
    const numbers = [];

    for (let i = 1; i < 10; i++) {
      numbers.push(<button key={i}>{i}</button>);
    }

    return numbers;
  };

  return (
    <div className={CalculatorStyle.wrapper}>
      <div className={CalculatorStyle.calculator}>
        <div className={CalculatorStyle.header}>
          <span>0</span>
          {0}
        </div>
        ;
        <div className={CalculatorStyle.controls}>
          <button>+</button>
          <button>-</button>
          <button>/</button>
          <button>x</button>
          <button>delete</button>

          <div className={CalculatorStyle.numbers}>
            <button>0</button>
            <button>.</button>
            <button>=</button>
          </div>
        </div>
      </div>
    </div>
  );
}
