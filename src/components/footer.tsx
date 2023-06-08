import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

const Container = styled.footer`
  background: rgb(0,115,213);
  background: linear-gradient(45deg, rgba(0,115,213,1) 0%, rgba(0,194,187,1) 65%);
  padding: 2rem 4rem 0 4rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1920px;
  gap: 5%;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  margin: 0.5rem;
  font-weight: bold;
  text-align: left;

  :hover {
    text-decoration: underline;
  }
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 15%;
  justify-content: center;

  @media (max-width: 768px) {
      flex: 100%;
  }

  h3 {
    color: white;
    font-weight: bold;
    font-size: 1.6rem;
    margin-bottom: 0;
  }
`

export const Footer = () => (
  <Container>
    <Content style={{ flex: '20%' }}>
      <StyledLink to="/">
        <StaticImage
          src="../images/Logo copa.png"
          loading="eager"
          quality={95}
          formats={["auto", "webp", "avif"]}
          alt="Copa Health logo"
          layout="fullWidth"
        />
        <p style={{ color: "white", fontSize: "0.6rem", fontWeight: "bold" }}>11860 W State Road 84 Suite B8 Davie, FL 33325</p>
      </StyledLink>
    </Content>
    <Content>
      <StaticImage
        src="../images/fda2w.png"
        loading="eager"
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt="Marodyne LiV logo"
        style={{ maxWidth: "100px", margin: "auto" }}
      />
    </Content>
    <Content style={{ textAlign: "center" }}>
      <h3>Social Media</h3>
      <Content style={{ flexDirection: "row", padding: "auto 1rem" }}>
        <StyledLink to="/">
          <StaticImage
            src="../images/Logo Facebook.png"
            loading="eager"
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt="Marodyne LiV Facebook"
            style={{ margin: `auto`, maxWidth: "3rem", minWidth: "2rem" }}
          />
        </StyledLink>
        <StyledLink to="/">
          <StaticImage
            src="../images/Logo Instagram.png"
            loading="eager"
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt="Marodyne LiV Instagram"
            style={{ margin: `auto`, maxWidth: "3rem", minWidth: "2rem" }}
          />
        </StyledLink>
        <StyledLink to="/">
          <StaticImage
            src="../images/Logo Linkedin.png"
            loading="eager"
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt="Marodyne LiV Linkedin"
            style={{ margin: `auto`, maxWidth: "3rem", minWidth: "2rem" }}
          />
        </StyledLink>
      </Content>

    </Content>
    <Content>
      <h3>About Us</h3>
      <StyledLink to="/">Company Profile</StyledLink>
      <StyledLink to="/">Disclaimer</StyledLink>
    </Content>
    <Content>
      <h3>Connect</h3>
      <StyledLink to="/">Know more</StyledLink>
    </Content>
    <Content style={{ flex: "100%", width: "100%", display: "block", textAlign: "center", margin: "10px auto 2px auto" }}>
      Marodyne LiV is a trademark of BTT Health GmbH © {new Date().getFullYear()} &middot; Developed by
      {` `}
      <a href="https://www.dueebrasil.com.br">Duee Brasil</a>
    </Content>
  </Container>
)
