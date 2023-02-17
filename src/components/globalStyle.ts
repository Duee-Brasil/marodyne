import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        background: white;
        font-family: "Montserrat", Open-Sans, Helvetica, Sans-Serif;
        font-weight: 300;
        box-sizing: border-box;
        word-wrap: break-word;
    }

    * {
        box-sizing: border-box;
    }

    h1, h2, h3, h4, h5, h6, a, button {
        color: #0F2B76;
    }

    img {
        width: 100%;
    }

    p {
        text-align: justify;
        line-height: 1.8rem;
        font-size: 1.2rem;
        letter-spacing: 2px;
    }
`
