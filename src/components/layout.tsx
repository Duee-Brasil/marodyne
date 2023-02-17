import * as React from "react"
import styled from "styled-components"

import { Header } from "./header"
import { Footer } from "./footer"
import { GlobalStyle } from "./globalStyle"

const Main = styled.main`
  width: 100vw;
  max-width: 1024px;
  margin: auto;
`

export const Layout = ({ children }: any) => {

  return (
    <>
      <GlobalStyle />
      <Header siteTitle={"Marodyne"} />
      <Main>{children}</Main>
      <Footer />
    </>
  )
}
