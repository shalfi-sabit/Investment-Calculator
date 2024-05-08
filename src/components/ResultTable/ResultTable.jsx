import React from "react";
import DataRow from "./DataRow";

const ResultTable = ({ yearlyDataState, userInputState }) => {
  return (
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
          ({ year, yearlyInterest, yearlyContribution, savingsEndOfYear }) => (
            <DataRow
              key={Math.random()}
              year={year}
              totalSavings={savingsEndOfYear}
              interestGainInYear={yearlyInterest}
              yearlyContribution={yearlyContribution}
              initialInvestment={savingsEndOfYear}
            />
          )
        )}
      </tbody>
    </table>
  );
};

export default ResultTable;
