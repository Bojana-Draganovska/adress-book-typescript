// Vendor Imports
import React from "react";
// Styles
import styled from "styled-components";

const ValidationMessage = () => {
    return (
        <ValidationMessageStyled>This field is required</ValidationMessageStyled>
    );
};

const ValidationMessageStyled = styled.p`
    color: red;
`;

export default ValidationMessage;
