import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import { useI18next, useTranslation } from "gatsby-plugin-react-i18next"

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

export const Header = ({ siteTitle }: HeaderProps) => {
  const { languages, changeLanguage } = useI18next();
  const { t } = useTranslation();
  
  return (
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
        <ul className="languages">
          {languages.map((lng) => (
            <li key={lng}>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  changeLanguage(lng);
                }}>
                {lng}
              </a>
            </li>
          ))}
        </ul>
      <StyledLink to="#home">{t("Home")}</StyledLink>
      <StyledLink to="#device">Marodyne-LiV</StyledLink>
        <StyledLink to="https://shop.marodyneliv.us">{t("How to buy")}</StyledLink>
        <StyledLink to="https://shop.marodyneliv.us/pages/contact">{t("Contact Us")}</StyledLink>
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
)}
