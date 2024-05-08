import React, { useState } from "react";

const Form = ({ setYearlyDataState }) => {
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

  const userInputHandler = (inputFieldName, value) => {
    setUserInputState((prevState) => {
      const updatedState = { ...prevState };
      updatedState[inputFieldName] = value;
      return updatedState;
    });
  };

  const resetInput = () => {
    setUserInputState({
      currentSavings: "",
      yearlySavings: "",
      expectedInterest: "",
      investmentDuration: "",
    });
  };

  const [userInputState, setUserInputState] = useState({
    currentSavings: "",
    yearlySavings: "",
    expectedInterest: "",
    investmentDuration: "",
  });

  return (
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
  );
};

export default Form;
