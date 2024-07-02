import React from "react";
import styled from "styled-components";
import { ChartBar } from "./ChartBar";

export const Chart = ({ expenses }) => {
  const maxPrise = 2000;

  const month = [
    {
      label: "январь",
      currentPrise: 0,
    },
    {
      label: "февраль",
      currentPrise: 0,
    },
    {
      label: "март",
      currentPrise: 0,
    },
    {
      label: "апрель",
      currentPrise: 0,
    },
    {
      label: "май",
      currentPrise: 0,
    },
    {
      label: "июнь",
      currentPrise: 0,
    },
    {
      label: "июль",
      currentPrise: 0,
    },
    {
      label: "август",
      currentPrise: 0,
    },
    {
      label: "сентябрь",
      currentPrise: 0,
    },
    {
      label: "октябрь",
      currentPrise: 0,
    },
    {
      label: "ноябрь",
      currentPrise: 0,
    },
    {
      label: "декабрь",
      currentPrise: 0,
    },
  ];

  expenses.forEach((item) => {
    const getMonth = item.date.getMonth();
    month[getMonth].currentPrise += item.amount;
  });

  return (
    <StyledChartContainer>
      {month.map((item) => (
        <ChartBar
          key={item.label}
          label={item.label}
          currentPrise={item.currentPrise}
          maxPrise={maxPrise}
        />
      ))}
    </StyledChartContainer>
  );
};

const StyledChartContainer = styled.div`
  width: 100%;
  height: 151px;
  padding: 1rem;
  background-color: #f8dfff;
  border-radius: 12px;
  display: flex;
  justify-content: space-between;
`;
