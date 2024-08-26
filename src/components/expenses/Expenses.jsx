import React, { useState } from "react";
import { ExpensesList } from "./expensesList/ExpensesList";
import { Card } from "../UI/card/Card";
import { ExpensesFilter } from "./expensesFilter/ExpensesFilter";
import { Chart } from "../chart/Chart";

export const Expenses = ({ expenses, onOpenClose, showModal, onDelete }) => {
  const [filteredByYear, setFilteredByYear] = useState("2023");

  const handleSelected = (event) => {
    setFilteredByYear(event.target.value);
  };

  const filteredExpenses = expenses.filter((item) => {
    let year = item.date.getFullYear().toString();
    return year === filteredByYear;
  });

  return (
    <Card>
      <ExpensesFilter value={filteredByYear} onChange={handleSelected} />
      <Chart expenses={filteredExpenses} />
      <ExpensesList
        onOpenClose={onOpenClose}
        expenses={filteredExpenses}
        showModal={showModal}
        onDelete={onDelete}
      />
    </Card>
  );
};
