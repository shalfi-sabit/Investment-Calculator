import React from "react";

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const DataRow = ({
  year,
  totalSavings,
  interestGainInYear,
  totalInterestGained,
  totalInvestedCapital,
}) => {
  return (
    <tr>
      <td>{formatter.format(year)}</td>
      <td>{formatter.format(totalSavings)}</td>
      <td>{formatter.format(interestGainInYear)}</td>
      <td>{formatter.format(totalInterestGained)}</td>
      <td>{formatter.format(totalInvestedCapital)}</td>
    </tr>
  );
};

export default DataRow;
