import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html, body, #root {
        width: 100%;
        height: 100%;
        background-color: white;
        margin: 0;
        padding: 0;
        font-family: monospace;
        overflow: hidden;
    }
`;