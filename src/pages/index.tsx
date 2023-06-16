// If you don't want to use TypeScript you can delete this file!
import * as React from "react"
import { graphql, HeadFC } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Layout, LinkButton, Seo } from "../components"
import { Contact, Container, Device, MajorPart, Medical, MinorPart, Product, Science, Video } from "../components/indexStyle"
import { useTranslation } from "gatsby-plugin-react-i18next";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 2000,
  slidesToShow: 1,
  slidesToScroll: 1,
  swipeToSlide: true,
};

export const Home = () => {
  const { t } = useTranslation();

  return (
    <Layout id="home">
      <StaticImage
        src="../images/Grnade - Op 1.png"
        loading="eager"
        formats={["auto", "webp", "avif"]}
        alt="Happy and active mature people"
        layout="constrained"
        aspectRatio={1920 / 1040}
        style={{ margin: `auto` }}
      />

      <Product id="device">
        <h1>
          {t('Available in the United States, Marodyne Low-intensity Vibration (LiV) Device')}
        </h1>
        <Container>
          <MinorPart>
            <StaticImage
              src="../images/Balanca.png"
              loading="eager"
              formats={["auto", "webp", "avif"]}
              alt="Marodyne LiV device"
              layout="constrained"
              aspectRatio={612 / 346}
              style={{ margin: `auto` }}
            />
          </MinorPart>
          <MajorPart>
            <p>
              {t("Init1")}</p>
            <p>{t("Init2")}</p>
            <p>{t("Init3")}</p>
            <LinkButton link="https://shop.marodyneliv.us/" title={t("Buy Now")} />
          </MajorPart>
        </Container>
      </Product>

      <Video>
        <Slider {...settings}>
          <iframe src="https://www.youtube.com/embed/nSWfUXe1DJs"
            title="Marodyne First Use"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen></iframe>
          <iframe src="https://www.youtube.com/embed/NTFN6PNTTWg"
            title="Marodyne First Use"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen></iframe>
          <iframe src="https://www.youtube.com/embed/TrZaM-35nkM"
            title="Dr. Clinton Rubin, Low Intensity Vibration for Bone Health"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen></iframe>
          <iframe src="https://www.youtube.com/embed/DR2DvqcziVo"
            title="Q&A Marodyne LiV Device with Sara Meeks"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen></iframe>
          <iframe src="https://www.youtube.com/embed/g7wOc8xJisY"
            title="Marodyne LiV Device User Guide"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen></iframe>
        </Slider>
      </Video>

      <Device>
        <h1>
          {t("Derived from space research")}
        </h1>
        <Container>
          <MajorPart>
            <p>{t("Device1")}</p>
            <p>{t("Device2")}</p>
            <LinkButton link="https://shop.marodyneliv.us/" title={t("Buy Now")} />
          </MajorPart>
          <MinorPart>
            <StaticImage
              src="../images/Setinha.png"
              loading="eager"
              formats={["auto", "webp", "avif"]}
              alt=""
              layout="constrained"
              aspectRatio={163 / 269}
              style={{ margin: `auto`, maxWidth: "30%" }}
            />
          </MinorPart>
        </Container>

      </Device>

      <StaticImage
        src="../images/Grnade - Op 2.png"
        loading="eager"
        formats={["auto", "webp", "avif"]}
        alt=""
        layout="constrained"
        aspectRatio={1920 / 1040}
        style={{ margin: `auto` }}
      />

      <Science>
        <Container>
          <MinorPart>
            <StaticImage
              src="../images/joelho.png"
              loading="eager"
              formats={["auto", "webp", "avif"]}
              alt=""
              layout="constrained"
              aspectRatio={1024 / 1295}
              style={{ margin: `auto` }}
            />
          </MinorPart>
          <MajorPart>
            <h1>
              {t("Research & science supports Marodyne LiV")}
            </h1>
            <p>{t("Science1")}</p>
            <LinkButton link="https://shop.marodyneliv.us/" title={t("Buy Now")} />
          </MajorPart>
        </Container>
      </Science>

      <StaticImage
        src="../images/Media - Op 2.png"
        loading="eager"
        formats={["auto", "webp", "avif"]}
        alt=""
        layout="constrained"
        aspectRatio={1920 / 870}
        style={{ margin: `auto` }}
      />

      <Medical>
        <h1>
          {t("The Marodyne LiV device draws on a solid medical foundation.")}
        </h1>
        <p>{t("Medical1")}</p>
        <Container>
          <MinorPart>
            <StaticImage
              src="../images/Foto.png"
              loading="eager"
              formats={["auto", "webp", "avif"]}
              alt=""
              layout="constrained"
              aspectRatio={579 / 580}
              style={{ margin: `auto` }}
            />
          </MinorPart>
          <MajorPart>
            <h2>
              {t("Know who is behind the Marodyne LiV:")}
            </h2>
            <p>{t("Medical2")}
              
            </p>
          </MajorPart>
        </Container>
        <h2>
          {t("For this Detailed information on Research")}
        </h2>
        <LinkButton link="https://www.stonybrook.edu/commcms/bme/people/c_rubin.php" title={t("Click Here")} />
      </Medical>

      <StaticImage
        src="../images/Media - Op 1.png"
        loading="eager"
        formats={["auto", "webp", "avif"]}
        alt=""
        layout="fullWidth"
        aspectRatio={1031 / 460}
        style={{ margin: `auto` }}
      />

      <Contact>
        <h1>
          {t("We're All Ears!")}
        </h1>
        <p>{t("Contact1")}</p>
        <LinkButton link="https://shop.marodyneliv.us/" title={t("Buy Now")} />
      </Contact>

    </Layout>
  )
}

export const Head: HeadFC = () => <Seo />

export default Home

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: {language: {eq: $language}}) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;