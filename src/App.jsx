import React, { useEffect, useState } from "react";
import { NewExpense } from "./components/new-expense/NewExpense";
import { EXPENSES } from "./utils/constants";
import { Expenses } from "./components/expenses/Expenses";
import { Header } from "./components/header/Header";
import { Login } from "./components/login/Login";
import { Users } from "./components/users/Users";
import { Modal } from "./components/UI/modal/Modal";
import Button from "./components/UI/button/Button";
import styled from "styled-components";

const App = () => {
  const [expenses, setExpenses] = useState(EXPENSES);
  const [isLogin, setIsLogin] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [deleteItem, setDeleteItem] = useState(null);
  const [isUser, setIsUser] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [activeView, setActiveView] = useState("expenses");

  const onAddExpense = (newExpense) => {
    setExpenses([...expenses, newExpense]);
  };

  const loginHandler = () => {
    setIsLogin(true);
    localStorage.setItem("auth", !isLogin);
  };

  useEffect(() => {
    const isAuth = localStorage.getItem("auth") === "true";
    setIsLogin(isAuth);
  }, []);

  const logOutHandler = () => {
    setIsLogin(false);
    localStorage.clear();
  };

  const openAndCloseModal = (itemId) => {
    setShowModal(!showModal);
    setDeleteItem(itemId);
  };

  const handleDeleteClick = () => {
    const removeItem = expenses.filter((todos) => todos.id !== deleteItem);
    setExpenses(removeItem);
    openAndCloseModal(null);
  };

  const userInHadler = () => {
    setIsUser(true);
    localStorage.setItem("name", true);
  };

  useEffect(() => {
    const user = localStorage.getItem("name") === "true";
    setIsUser(user);
  }, []);

  const handleLogoutClick = () => {
    setShowLogoutModal(true);
  };

  const handleLogoutConfirm = (confirm) => {
    if (confirm) {
      logOutHandler();
    }
    setShowLogoutModal(false);
  };

  return (
    <>
      <Header
        isLogin={isLogin}
        onLogout={handleLogoutClick}
        showModal={showModal}
        onOpenAndClose={openAndCloseModal}
        onLogin={loginHandler}
        openUser={userInHadler}
        setActiveView={setActiveView}
      />
      {isLogin ? (
        <>
          {activeView === "users" ? (
            <Users />
          ) : (
            <>
              <NewExpense onAddExpense={onAddExpense} />
              <Expenses
                onOpenClose={openAndCloseModal}
                expenses={expenses}
                showModal={showModal}
                onDelete={handleDeleteClick}
              />
            </>
          )}
        </>
      ) : (
        <Login onLogin={loginHandler} />
      )}

      <Modal
        isOpen={showLogoutModal}
        onclose={() => handleLogoutConfirm(false)}
      >
        <>
          <h2>Вы точно хотите выйти?</h2>
          <StyledArticle>
            <Button onClick={() => handleLogoutConfirm(true)}>Да</Button>
            <Button onClick={() => handleLogoutConfirm(false)}>Нет</Button>
          </StyledArticle>
        </>
      </Modal>
    </>
  );
};
export default App;

const StyledArticle = styled.article`
  display: flex;
  gap: 50px;
`;
