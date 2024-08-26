import React, { useEffect, useState } from "react";
import styled from "styled-components";

export const Users = () => {
  const [user, setUser] = useState([]);
  console.log(user);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);

  return (
    <MainDiv>
      {user.map((item) => (
        <StyledDiv>
          <p key={item.id}>{item.name}</p>
          <p key={item.id}>
            <span>Email:</span> {item.email}
          </p>
          <p key={item.id}>
            <span>Website:</span> {item.website}
          </p>
        </StyledDiv>
      ))}
    </MainDiv>
  );
};

const MainDiv = styled.div`
  display: flex;
  gap: 90px;
  flex-wrap: wrap;
  padding: 50px 0 0 70px;
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  width: 270px;
  height: 130px;
  background-color: #ad9be9;
  color: white;
  font-weight: 500;
  padding: 0 0 0 15px;

  span {
    color: black;
    font-weight: 700;
  }
`;
