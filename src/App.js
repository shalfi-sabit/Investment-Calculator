import { useState } from "react";
import logo from "./assets/investment-calculator-logo.png";
import Header from "./components/Header/Header";
import ResultTable from "./components/ResultTable/ResultTable";
import Form from "./components/Form/Form";

function App() {
  const [yearlyDataState, setYearlyDataState] = useState([]);

  return (
    <div>
      <Header image={logo} title={"Investment Calculator"} />

      <Form setYearlyDataState={setYearlyDataState} />

      {yearlyDataState.length === 0 ? (
        <h3 style={{ textAlign: "center", color: "aqua" }}>No Data to Show</h3>
      ) : (
        <ResultTable yearlyDataState={yearlyDataState} />
      )}
    </div>
  );
}

export default App;
