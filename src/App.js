import { useState } from "react";
import logo from "./assets/investment-calculator-logo.png";
import DataRow from "./components/DataRow";

function App() {
  const [yearlyDataState, setYearlyDataState] = useState([]);
  const [userInputState, setUserInputState] = useState({
    currentSavings: "",
    yearlySavings: "",
    expectedInterest: "",
    investmentDuration: "",
  });

  const userInputHandler = (inputFieldName, value) => {
    setUserInputState((prevState) => {
      const updatedState = { ...prevState };
      updatedState[inputFieldName] = value;
      return updatedState;
    });
  };

  const calculateHandler = (userInput, event) => {
    event.preventDefault();
    const yearlyData = []; // per-year results

    let currentSavings = +userInput["currentSavings"]; // feel free to change the shape of this input object!
    const yearlyContribution = +userInput["yearlySavings"]; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput["expectedInterest"] / 100;
    const duration = +userInput["investmentDuration"];

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
    setYearlyDataState(yearlyData);
  };

  const resetInput = () => {
    setUserInputState({
      currentSavings: "",
      yearlySavings: "",
      expectedInterest: "",
      investmentDuration: "",
    });
  };
  return (
    <div>
      <header className="header">
        <img src={logo} alt="logo" />
        <h1>Investment Calculator</h1>
      </header>

      <form className="form">
        <div className="input-group">
          <p>
            <label htmlFor="current-savings">Current Savings ($)</label>
            <input
              type="number"
              id="current-savings"
              value={userInputState.currentSavings}
              onChange={(event) =>
                userInputHandler("currentSavings", event.target.value)
              }
            />
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
            <input
              type="number"
              id="yearly-contribution"
              value={userInputState.yearlySavings}
              onChange={(event) =>
                userInputHandler("yearlySavings", event.target.value)
              }
            />
          </p>
        </div>
        <div className="input-group">
          <p>
            <label htmlFor="expected-return">
              Expected Interest (%, per year)
            </label>
            <input
              type="number"
              id="expected-return"
              value={userInputState.expectedInterest}
              onChange={(event) =>
                userInputHandler("expectedInterest", event.target.value)
              }
            />
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input
              type="number"
              id="duration"
              value={userInputState.investmentDuration}
              onChange={(event) =>
                userInputHandler("investmentDuration", event.target.value)
              }
            />
          </p>
        </div>
        <p className="actions">
          <button type="reset" className="buttonAlt" onClick={resetInput}>
            Reset
          </button>
          <button
            type="submit"
            className="button"
            onClick={(event) => calculateHandler(userInputState, event)}
          >
            Calculate
          </button>
        </p>
      </form>

      {yearlyDataState.length === 0 ? (
        <h3 style={{ textAlign: "center", color: "aqua" }}>No Data to Show</h3>
      ) : (
        <table className="result">
          <thead>
            <tr>
              <th>Year</th>
              <th>Total Savings</th>
              <th>Interest (Year)</th>
              <th>Total Interest</th>
              <th>Invested Capital</th>
            </tr>
          </thead>
          <tbody>
            {yearlyDataState.map(
              ({
                year,
                yearlyInterest,
                yearlyContribution,
                savingsEndOfYear,
              }) => (
                <DataRow
                  key={Math.random()}
                  year={year}
                  totalSavings={savingsEndOfYear}
                  interestGainInYear={yearlyInterest}
                  totalInterestGained={yearlyContribution}
                  totalInvestedCapital={"DUMMY"}
                />
              )
            )}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default App;
