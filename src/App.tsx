// Vendor Imports
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "./redux";
// Components
import Button from "./components/Button";
import Container from "./components/Container";
import { GlobalStyle } from './components/GlobalStyle';
import User from "./components/User";
import Users from "./components/Users";
// Styles
import styled from 'styled-components';

function App() {

  const store = useSelector(store => store);
  const [disable, setDisable] = useState(false);
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    if (store) {
      if (store.hasOwnProperty("contacts")) {
        //@ts-ignore
        setContacts(store.contacts);
      }
    }

  }, [store]);

  return (
    <>
      <GlobalStyle />
      <StyledTitleAndBtn>Adress Book</StyledTitleAndBtn>
      <StyledTitleAndBtn>
      <Button title={"Add Contact"} disable={disable} setDisable={setDisable} />
      </StyledTitleAndBtn>
      <DivStyled>
        {disable
          ?
          <Container usersComponent={<User disable={disable} setDisable={setDisable} />} />
          :
          <Container usersComponent={<Users disable={disable} setDisable={setDisable} contacts={contacts} />} />
        }
      </DivStyled>
    </>
  );
}

const DivStyled = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  // flex-direction: column;
`;

const StyledTitleAndBtn = styled.h1`
  display: flex;
  justify-content: center;
  margin-bottom: 0;
  color: #316481;
`;

export default App;