import * as React from "react"
import styled from "styled-components"
import { initializeApp } from "firebase/app";

import { Header } from "./header"
import { Footer } from "./footer"
import { GlobalStyle } from "./globalStyle"
import 'gatsby-plugin-react-i18next';

const Main = styled.main`
  width: 100vw;
  max-width: 1920px;
  margin: auto;
`

const firebaseConfig = JSON.parse(atob(process.env.GATSBY_FIREBASE_CONFIG as string))

export const Layout = ({ children }: any) => {
  const app = initializeApp(firebaseConfig);

  return (
    <>
      <GlobalStyle />
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  )
}
