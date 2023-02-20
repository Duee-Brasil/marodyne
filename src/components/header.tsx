import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

const Container = styled.header`
  background-color: white;
  padding: 2rem 4rem;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1920px;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  margin: 1rem;

  :hover {
    text-decoration: underline;
  }
`

const Content = styled.div`
  align-items: center;
  display: flex;
`

type HeaderProps = {
  siteTitle?: string
}

export const Header = ({ siteTitle }: HeaderProps) => (
  <Container>
    <Content>
      <StyledLink to="/">
      <StaticImage
        src="../images/Logo.png"
        loading="eager"
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt="Marodyne LiV logo"
        style={{ margin: `auto` }}
      />
    </StyledLink>
    </Content>
    <Content>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/">Marodyne-LiV</StyledLink>
      <StyledLink to="/">How to buy</StyledLink>
      <StyledLink to="/">Contact Us</StyledLink>
      <StyledLink to="/"><StaticImage
        src="../images/Sacola de compras.png"
        loading="eager"
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt="Marodyne LiV logo"
        style={{ margin: `auto` }}
      /></StyledLink>
    </Content>
  </Container>
)
