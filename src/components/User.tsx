// Vendor Imports
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setData } from "../redux";
import { v4 as uuidv4 } from 'uuid';
// Components
import Button from "./Button";
import ValidationMessage from "./ValidationMessage";
// Icons
import arrow from "../assets/icons/arrow-dropdown.svg";
// Data
import { allCountries } from "../data/countries";
// Styles
import styled from "styled-components";

interface Props {
    disable?: boolean;
    setDisable?: any;
}

const User = (props: Props) => {

    const countries = allCountries;

    const [handleDropDown, setHandleDropDown] = React.useState<boolean>(false);
    const [flag, setFlag] = React.useState<boolean>(false);
    const [validation, setValidation] = React.useState<boolean>(false);
    const [choosenCountry, setChoosenCountry] = useState("Select a country");
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");

    const dispatch = useDispatch();

    const handleDropDownFunction = () => {
        setHandleDropDown(!handleDropDown);
    };

    const selectedCountry = (name: string) => {
        setFlag(true);
        setChoosenCountry(name);
        checkValidation();
    }

    const handleInputName = (e: any) => {
        setName(e.target.value);
        checkValidation();
    };

    const handleInputSurname = (e: any) => {
        setSurname(e.target.value);
        checkValidation();
    };

    const handleInputEmail = (e: any) => {
        if (!isValidEmail(e.target.value)) {
            setError('Email is invalid');
        } else {
            setError("")
        }
        setEmail(e.target.value);
        checkValidation();
    };

    const isValidEmail = (email: any) => {
        return /\S+@\S+\.\S+/.test(email);
    };

    const checkValidation = () => {
        if ((name != "") && (surname != "") && (email != "") && (choosenCountry != "")) {
            setValidation(true);
        }
    };

    const setUserData = () => {
        if (flag && validation) {
            dispatch(setData(
                {
                    id: uuidv4(),
                    name: name,
                    surname: surname,
                    email: email,
                    country: choosenCountry
                }
            ));
            props.setDisable(false);
        }
    };

    return (
        <InfoContainerStyled>
            <InformationStyled>Name:</InformationStyled>
            <InputStyled id="name" onChange={handleInputName} value={name} />
            {name != "" ? null : <ValidationMessage />}
            <InformationStyled>Surname:</InformationStyled>
            <InputStyled id="surname" onChange={handleInputSurname} value={surname} />
            {surname != "" ? null : <ValidationMessage />}
            <InformationStyled>Email:</InformationStyled>
            <InputStyled id="email" onChange={handleInputEmail} value={email} />
            {email != "" ? null : <ValidationMessage />}
            {error != "" && email != "" ? <p style={{ color: 'red' }}>{error}</p> : null}
            <InformationStyled>Country:</InformationStyled>
            <CountryDivStyled>
                {choosenCountry}
                <img src={arrow} onClick={handleDropDownFunction} />
                {handleDropDown ?
                    <DropDownStyled>
                        {countries.map((country, i) => {
                            return <p key={i}
                                onClick={() => { selectedCountry(country.name); handleDropDownFunction() }}>
                                {country.name}</p>
                        })}
                    </DropDownStyled>
                    : null}
            </CountryDivStyled>
            {flag ? null : <ValidationMessage />}
            <ButtonContainerStyled
                onClick={() => ((error != "") ? null : setUserData(), setValidation(false))}>
                <Button title="Add Data" />
            </ButtonContainerStyled>
        </InfoContainerStyled>
    );
};

export const UserContainerStyled = styled.div`
        display: flex;
        background-color:#233145;
        flex-direction: column;
        width: 45%;
        margin: 50px auto auto auto;
        height: 70%;
        border-radius: 16px;
        box-shadow: 0px 4px 4px 0px #00000040;
    `;

const InfoContainerStyled = styled.div`
    displa: flex;
    flex-directon: column;
    padding: 20px;
`;

const InformationStyled = styled.p`
    font-weight: 400;
    font-size: 14px;
    color: white;
`;

export const InputStyled = styled.input`
    border-radius: 16px;
    border: none;
    color: white;
    box-shadow: 0px 4px 4px 0px #00000040;
    background-color: #316481;
    width: 266px;
    height: 26px;
    padding: 0 10px;
    cursor: pointer;
    font-family: monospace;
    :hover {
        background-color: #14425C;
    }
    :focus {
        outline: 2px solid #316481;
    }
`;

export const ButtonContainerStyled = styled.div`
    display: flex;
    margin-top: 20px;
    justify-content: start;
    width: 100%;
`;

const CountryDivStyled = styled.div`
    width: 266px;
    height: 26px;
    box-shadow: 0px 4px 4px 0px #00000040;
    background-color: #316481;
    border-radius: 16px;
    display: flex;
    padding: 0 10px;
    align-items: center;
    color: white;
    position: relative;
    justify-content: space-between;
    img {
        margin-right: 10px;
    }
`;

const DropDownStyled = styled.div`
    width: 150px;
    height: 150px;
    display: flex;
    flex-direction: column;
    position: absolute;
    background-color: #316481;
    border: 2px solid white;
    overflow: scroll;
    cursor: pointer;
`;

export default User;