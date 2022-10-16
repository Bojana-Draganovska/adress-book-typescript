// Vendor Imports
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteData } from "../redux";
import { changeData } from "../redux";
// Components 
import Button from "./Button";
// Styled
import styled from "styled-components";
import { InputStyled } from "./User";

interface Props {

    disable?: boolean;
    setDisable?: any;
    contacts?: any;
}

const Users = (props: Props) => {

    const store = useSelector(store => store);
    const dispatch = useDispatch();

    const [changeFlag, setChangeFlag] = React.useState<number>(-1);
    const [changeButton, setChangeButton] = React.useState<boolean>(true);

    const changeUser = (contact: any) => {
        dispatch(changeData(
         {
            id: contact.id,
            name: changedName === "" ? contact.name : changedName,
            surname: changedSurname === "" ? contact.surname : changedSurname,
            email: changedEmail === "" ? contact.email : changedEmail,
            country: changedCountry === "" ? contact.country : changedCountry,
            }
        ))
    };

    const deleteUser = (id: string) => {
        dispatch(deleteData(
            id
        ));
    };

    const [changedName, setChangedName] = React.useState<string>("");
    const [changedSurname, setChangedSurname] = React.useState<string>("");
    const [changedEmail, setChangedEmail] = React.useState<string>("");
    const [changedCountry, setChangedCountry] = React.useState<string>("");

    const handleInputChangedName = (e: any) => {
        setChangedName(e.target.value);
    };

    const handleInputChangedSurname = (e: any) => {
        setChangedSurname(e.target.value);
    };

    const handleInputChangedEmail = (e: any) => {
        setChangedEmail(e.target.value);
    };

    const handleInputChangedCountry = (e: any) => {
        setChangedCountry(e.target.value);
    };

    return (
        <>
            {props.contacts.map((contact: any, i: number) => {
                return (
                    <AddedUser key={i} onClick={() => console.log(i)}>
                        <AddedInfoDiv>
                            <AddedInfo>{contact.name}</AddedInfo>
                            {changeFlag === i ? <InputStyled id="name" value={changedName} onChange={handleInputChangedName} placeholder={"New Name"} /> : null}
                            <AddedInfo>{contact.surname}</AddedInfo>
                            {changeFlag === i ? <InputStyled id="surname" value={changedSurname} onChange={handleInputChangedSurname} placeholder={"New Surname"} /> : null}
                            <AddedInfo>{contact.email}</AddedInfo>
                            {changeFlag === i ? <InputStyled id="email" value={changedEmail} onChange={handleInputChangedEmail} placeholder={"New Email"} /> : null}
                            <AddedInfo>{contact.country}</AddedInfo>
                            {changeFlag === i ? <InputStyled id="email" value={changedCountry} onChange={handleInputChangedCountry} placeholder={"New Country"} /> : null}
                        </AddedInfoDiv>
                        <ButtonDiv>
                            <div onClick={() => deleteUser(contact.id)}>
                                <Button title={"delete"} />
                            </div>
                            <div onClick={() => setChangeButton(!changeButton)}>
                                {(changeButton === true) && (changeFlag === i)
                                    ?
                                    <div onClick={() => { changeUser(contact); setChangeFlag(-1);}}>
                                        <Button title={"save"} />
                                    </div>
                                    :
                                    <div onClick={() => {setChangeFlag(i);}} >
                                        <Button title={"change"} />
                                    </div>
                                }
                            </div>
                        </ButtonDiv>
                    </AddedUser>
                )
            })}
        </>
    );
};


const AddedUser = styled.div`
    width: 80%;
    margin: 20px auto;
    padding: 10px;
    background-color: #316481;
    border-radius: 16px;
`;

const AddedInfoDiv = styled.div`
    display: flex;
    flex-direction: column;
    color: white;
`;

const AddedInfo = styled.div`   
    background-color: #233145;
    padding: 5px;
    margin: 5px;
    border-radius: 16px;
    text-overflow: ellipsis;
    overflow: hidden;
`;

const ButtonDiv = styled.div`
    backround-color: pink;
    display:flex;
    margin: 10px;
`;

export default Users;