import { useState } from "react";
import logo from "./assets/investment-calculator-logo.png";
import Header from "./components/Header/Header";
import ResultTable from "./components/ResultTable/ResultTable";
import Form from "./components/Form/Form";

function App() {
  const [yearlyDataState, setYearlyDataState] = useState([]);
  const [userInputState, setUserInputState] = useState({
    currentSavings: "",
    yearlySavings: "",
    expectedInterest: "",
    investmentDuration: "",
  });

  return (
    <div>
      <Header image={logo} title={"Investment Calculator"} />

      <Form
        setYearlyDataState={setYearlyDataState}
        userInputState={userInputState}
        setUserInputState={setUserInputState}
      />

      {yearlyDataState.length === 0 ? (
        <h1 style={{ textAlign: "center", color: "aqua" }}>No Data to Show</h1>
      ) : (
        <ResultTable
          yearlyDataState={yearlyDataState}
          userInputState={userInputState}
          setUserInputState={setUserInputState}
        />
      )}
    </div>
  );
}

export default App;
