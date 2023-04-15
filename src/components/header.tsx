import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

const Container = styled.header`
  background-color: white;
  padding: 2rem 4rem;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1920px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
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

  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
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
          style={{ maxWidth: "200px" }}
        />
      </StyledLink>
    </Content>
    <Content>
      <StyledLink to="#home">Home</StyledLink>
      <StyledLink to="#device">Marodyne-LiV</StyledLink>
      <StyledLink to="https://shop.marodyneliv.us">How to buy</StyledLink>
      <StyledLink to="https://shop.marodyneliv.us/pages/contact">Contact Us</StyledLink>
      <StyledLink to="https://shop.marodyneliv.us/"><StaticImage
        src="../images/Sacola de compras.png"
        loading="eager"
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt="Marodyne LiV logo"
        style={{ margin: `auto`, width: "40px" }}
      /></StyledLink>
    </Content>
  </Container>
)
