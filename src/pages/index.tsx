// If you don't want to use TypeScript you can delete this file!
import * as React from "react"
import { Link, HeadFC } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Layout, LinkButton, Seo } from "../components"
import { Contact, Container, Device, MajorPart, Medical, MinorPart, Product, Science, Video } from "../components/indexStyle"

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

export const Home = () => (
  <Layout>
    <StaticImage
      src="../images/Grnade - Op 1.png"
      loading="eager"
      formats={["auto", "webp", "avif"]}
      alt="Happy and active mature people"
      layout="constrained"
      aspectRatio={1920 / 1040}
      style={{ margin: `auto` }}
    />

    <Product>
      <h1>
        Available in the United States, Marodyne Low-intensity Vibration (LiV) Device
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
            Marodyne LiV is a third generation low-intensity vibration device that safely improves muscle strength¹, function², and circulation³.</p>
          <p>The device builds on technology resulting from over 30 years of basic and clinical
            research, funded by the National Institutes of Health (NIH), National Aeronautics and
            Space Administration (NASA) and other funding agencies around the world.</p>
          <p>Conditions such as rebuilding muscle mass, restoring joints, adjunctive treatment for
            obesity, relieving minor pain or treating a temporary increase in local circulation may
            be safely overcome using Marodyne LiV for 10 - 20 minutes a day.
          </p>
          <LinkButton link="/" title="Buy Now" />
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
        Derived from space research
      </h1>
      <Container>
        <MajorPart>
          <p>
            An astronaut will suffer deconditioning of their musculoskeletal system while in 
            a zero-gravity environment. This is analogous to aging hereon earth.
          </p>
          <p>
            To mitigate the astronaut’s muscle and bone loss while in space, NASA (National 
            Aeronautics and Space Administration) put together a team, led by Professor 
            Clinton Rubin, to research and develop the low-intensity vibration concept.
          </p>
          <LinkButton link="/" title="Buy Now" />
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
            Research & science supports Marodyne LiV
          </h1>
          <p>
            The Low-intensity Vibration is high frequency, low-magnitude acceleration of the human standing on the device that contributes to bone and muscle wellness.
            These low magnitude accelerations also promote the building of lean muscle mass and the conditioning of muscle reflexes.
          </p>
          <LinkButton link="/" title="Buy Now" />
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
        The Marodyne LiV device draws on a solid medical foundation.
      </h1>
      <p>
        The starting points for the development of the treatment were orthopedics,
        osteoporosis and space medicine. The future of the research is increasingly
        determined by new studies into musculoskeletal health and effect of these low magnitude vibratory forces.
      </p>
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
            Know who is behind the Marodyne LiV:
          </h2>
          <p>
            Clinton T. Rubin, is Chief Scientific Officer at BTT Health GmbH that manufactures Marodyne LiV devices.
            He is SUNY Distinguished Professor and Director of the Center for Biotechnology, Musculoskeletal Research Laboratory.
            He has spent his scientific career trying to understand how mechanical signals influence the body.
            One of his key findings has been that extremely low magnitude mechanical signals,
            delivered in the form of Low-intensity Vibration (LiV), can dictate the regeneration
            patterns of mesenchymal stem cells (MSCs) found within the body to stimulate
            musculoskeletal tissues and suppress the formation of fat¹.
          </p>
        </MajorPart>
      </Container>
      <h2>
        For this Detailed information on Research
      </h2>
      <LinkButton link="/" title="Click Here" />
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
        We're All Ears!
      </h1>
      <p>
        Have any questions about the applications of our products, specifications, pricing,
        shipping or anything else? Our team is ready to answer all your questions!
      </p>
      <LinkButton link="/" title="Buy Now" />
    </Contact>

  </Layout>
)

export const Head: HeadFC = () => <Seo />

export default Home
