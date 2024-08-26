import React from "react";
import "./ExpensesItem.css";
import { ExpensesDate } from "../expensesDate/ExpensesDate";
import Button from "../../UI/button/Button";
import { Modal } from "../../UI/modal/Modal";
import styled from "styled-components";

export const ExpensesItem = ({
  title,
  amount,
  date,
  onOpenClose,
  showModal,
  id,
  onDelete,
}) => {
  return (
    <div className="expense-item">
      <div className="container-text_date">
        <ExpensesDate date={date} />
        <h2>{title}</h2>
      </div>
      <div className="expense-item_description">
        <div className="expense-item_price">${amount}</div>
        <Button onClick={() => onOpenClose(id)}>delete</Button>
        <Modal isOpen={showModal} onclose={onOpenClose}>
          <>
            <h2>Вы точно хотите удалить?</h2>
            <StyledArticle>
              <Button onClick={() => onDelete()}>Да</Button>
              <Button onClick={onOpenClose}>Нет</Button>
            </StyledArticle>
          </>
        </Modal>
      </div>
    </div>
  );
}

const StyledArticle = styled.article`
  display: flex;
  gap: 50px;
`;
