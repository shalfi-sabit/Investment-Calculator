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
  initialInvestment,
  yearlyContribution,
  totalContribution,
}) => {
  return (
    <tr>
      <td>{year}</td>
      <td>{formatter.format(totalSavings)}</td>
      <td>{formatter.format(interestGainInYear)}</td>
      <td>
        {formatter.format(
          +totalSavings - +initialInvestment - +yearlyContribution * +year
        )}
      </td>
      <td>
        {formatter.format(+initialInvestment + +yearlyContribution * +year)}
      </td>
    </tr>
  );
};

export default DataRow;
