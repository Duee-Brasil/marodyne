import * as React from "react"
import styled from "styled-components"
import { initializeApp } from "firebase/app";

import { Header } from "./header"
import { Footer } from "./footer"
import { GlobalStyle } from "./globalStyle"

const Main = styled.main`
  width: 100vw;
  max-width: 1024px;
  margin: auto;
`

const firebaseConfig = JSON.parse(atob(process.env.GATSBY_FIREBASE_CONFIG as string))

export const Layout = ({ children }: any) => {
  const app = initializeApp(firebaseConfig);

  return (
    <>
      <GlobalStyle />
      <Header siteTitle={"Marodyne"} />
      <Main>{children}</Main>
      <Footer />
    </>
  )
}
