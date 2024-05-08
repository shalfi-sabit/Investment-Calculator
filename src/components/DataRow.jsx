import React from "react";

const DataRow = ({
  year,
  totalSavings,
  interestGainInYear,
  totalInterestGained,
  totalInvestedCapital,
}) => {
  return (
    <tr>
      <td>{year}</td>
      <td>{totalSavings}</td>
      <td>{interestGainInYear}</td>
      <td>{totalInterestGained}</td>
      <td>{totalInvestedCapital}</td>
    </tr>
  );
};

export default DataRow;
