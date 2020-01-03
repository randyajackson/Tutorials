import * as React from "react";
import { render } from "react-dom";
import { createGlobalStyle } from "styled-components";

import Root from "./components/Root";

//tsx is used because the code contains JSX

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Stoke&display=swap');

body{
    font-family: Stoke, serif;
}
`;

render(<>
    <GlobalStyle />
    <Root />
    </>,
    document.getElementById("app"));

