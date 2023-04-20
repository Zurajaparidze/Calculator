import "./Calculator.css";
import mainLogo from "./images/logo.svg";
import dollarLogo from "./images/icon-dollar.svg";
import { useState } from "react";

function Calculator() {
  const [amount, setAmount] = useState(0);
  const [total, setTotal] = useState(0);
  const [inputValue, setInputValue] = useState();
  const [inputValue2, setInputValue2] = useState();
  const [custom, setCustom] = useState();

  const numbers = ["5%", "10%", "15%", "25%", "50%"];

  return (
    <div className="container">
      <img className="main-logo" src={mainLogo} />
      <div className="main-card">
        <div className="card1">
          <p className="text1">Bill</p>
          <div>
            {" "}
            <input
              className="input1"
              type="number"
              placeholder="0"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
          </div>

          <p className="text2"> Select Tip %</p>

          <form
            className="button"
            onSubmit={(e) => {
              e.preventDefault();
              if ((inputValue > 0) & (inputValue2 > 0) & (custom > 0)) {
                setAmount(
                  ((inputValue * (custom / 100)) / inputValue2).toFixed(2)
                );
                setTotal(
                  ((inputValue * (1 + custom / 100)) / inputValue2).toFixed(2)
                );
              }
            }}
          >
            {numbers.map((num) => {
              return (
                <button
                  onClick={(e) => {
                    if ((inputValue > 0) & (inputValue2 > 0)) {
                      const tip = parseFloat(
                        e.target.textContent.replace("%", "")
                      );

                      setAmount(
                        ((inputValue * (tip / 100)) / inputValue2).toFixed(2)
                      );
                      setTotal(
                        ((inputValue * (1 + tip / 100)) / inputValue2).toFixed(
                          2
                        )
                      );
                    }
                  }}
                  className="btn"
                >
                  {num}
                </button>
              );
            })}
            <input
              className="custom-button"
              placeholder="CUSTOM"
              type="number"
              value={custom}
              onChange={(e) => setCustom(e.target.value)}
            />
          </form>

          <div>
            <p className="text3">Number of People</p>
            <input
              className="customer-input"
              type="number"
              placeholder="0"
              value={inputValue2}
              onChange={(e) => {
                setInputValue2(e.target.value);
              }}
            />
          </div>
        </div>

        <div className="card2">
          <div className="amount">
            <div>
              <h2 className="h2">Tip Amount</h2>
              <span className="h3"> /person</span>
            </div>

            <div>
              <h2 className="span">{amount ? `$${amount}` : "$ 0.00"}</h2>
            </div>
          </div>

          <div className="amount2">
            <div>
              <h2 className="h2">Total</h2>
              <span className="h3"> /person</span>
            </div>

            <div>
              <h2 className="span">{total ? `$${total}` : "$ 0.00"}</h2>
            </div>
          </div>

          <button
            className="btn-reset"
            onClick={() => {
              setAmount(0);
              setTotal(0);
              setInputValue(0);
              setInputValue2(0);
              setCustom("");
            }}
          >
            RESET
          </button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
