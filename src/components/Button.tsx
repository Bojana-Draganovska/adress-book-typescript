// Vendor Imports
import React, { useEffect } from "react";
// Styles
import styled from "styled-components";

interface Props {
    title: string,
    color?: string;
    disable?: boolean;
    setDisable?: any;
    renderUsers?: boolean;
    setRenderUsers?: any;
};

const Button = (props: Props) => {

    const [btnTitle, setBtnTitle] = React.useState<String>(props.title);

    const addUser = () => {
        props.setDisable(true);
    };

    useEffect(() => {
        setBtnTitle(props.title);
    }, [props.title]);

    return (
        <ButtonStyled color={props.color}
            onClick={() => btnTitle === "Add Contact" ? addUser() : null}>
            {props.title}
        </ButtonStyled>
    )
};

const ButtonStyled = styled.button`
    padding: 10px 20px;
    margin: 10px;
    border-radius: 16px;
    border: none;
    color: white;
    box-shadow: 0px 4px 4px 0px #00000040;
    font-family: monospace;
    paddin: 10px;
    cursor: pointer;
    background-color: ${props => props.color || "#316481"};
    border: red;
    :hover {
        background-color: #14425C;
    }
    :focus {
        border: 2px solid #316481;
    }
`;

export default Button;
