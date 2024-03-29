import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import { useTranslation } from "gatsby-plugin-react-i18next"

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

export const Footer = () => {
  const { t } = useTranslation();

  return (
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
            style={{ maxWidth: "180px" }}
          />
          <p style={{ color: "white", fontSize: "0.6rem" }}>11860 W State Road 84 Suite B8 Davie, FL 33325</p>
        </StyledLink>
      </Content>
      <Content>
        <StaticImage
          src="../images/fda2w.png"
          loading="eager"
          quality={95}
          formats={["auto"]}
          alt="FDA logo"
          style={{ maxWidth: "120px", margin: "auto" }}
        />
      </Content>
      <Content style={{ textAlign: "center" }}>
        <h3>{t("Social Media")}</h3>
        <Content style={{ flexDirection: "row", padding: "auto 1rem" }}>
          <StyledLink to="https://www.facebook.com/copahealth">
            <StaticImage
              src="../images/Logo Facebook.png"
              loading="eager"
              quality={95}
              formats={["auto", "webp", "avif"]}
              alt="Marodyne LiV Facebook"
              style={{ margin: `auto`, maxWidth: "3rem", minWidth: "2rem" }}
            />
          </StyledLink>
          <StyledLink to="https://www.instagram.com/copahealth.us/">
            <StaticImage
              src="../images/Logo Instagram.png"
              loading="eager"
              quality={95}
              formats={["auto", "webp", "avif"]}
              alt="Marodyne LiV Instagram"
              style={{ margin: `auto`, maxWidth: "3rem", minWidth: "2rem" }}
            />
          </StyledLink>
          <StyledLink to="https://www.linkedin.com/company/copahealth-marodyne-liv/">
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
      {/* <Content>
        <h3>{t("About Us")}</h3>
        <StyledLink to="/">{t("Company Profile")}</StyledLink>
        <StyledLink to="/">{t("Disclaimer")}</StyledLink>
      </Content> */}
      <Content>
        <h3>{t("Connect")}</h3>
        <StyledLink to="https://shop.marodyneliv.us/pages/contact">{t("Know more")}</StyledLink>
      </Content>
      <Content style={{ flex: "100%", width: "100%", display: "block", textAlign: "center", margin: "10px auto 2px auto" }}>
        Marodyne LiV {t("is a trademark of")} BTT Health GmbH © {new Date().getFullYear()} &middot; {t("Developed by")}
        {` `}
        <a href="https://www.dueebrasil.com.br">Duee Brasil</a>
      </Content>
    </Container>
  )
}
