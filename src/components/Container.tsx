// Vendor Imports 
import React from "react";
// Styles
import styled from "styled-components";

interface Props {
    btnComponent?: any;
    usersComponent?: any;
    contactsArray?: any;
};

const Container = (props: Props) => {
    
    return (
        <ContainerStyled>
            <ContainerContentStyled>
                <UserContainer>
                    {props.usersComponent}
                </UserContainer>
            </ContainerContentStyled>
        </ContainerStyled>
    );
};

const ContainerStyled = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
`;

const ContainerContentStyled = styled.div`
    display: flex;
    background-color:#233145;
    flex-direction: column;
    justify-content: space-between;
    width: 60%;
    margin: 50px auto auto auto;
    height: 70%;
    border-radius: 16px;
    box-shadow: 0px 4px 4px 0px #00000040;
    overflow: scroll;
    ::-webkit-scrollbar {
         width: 10px;
         height: 10px;
         color: pink;
     }
     
     ::-webkit-scrollbar-track {
         border-radius: 50px;
     }
`;

const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
`;

const UserContainer = styled.div`
`;

export default Container;

