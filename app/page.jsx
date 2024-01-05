import Link from "next/link";

import Award from "../components/award/Award";

import Merch from "../components/merch/Merch";
import Brand from "../components/brand/Brand";
import Counter from "../components/counter/Counter";
import CopyRight from "../components/footer/copyright/CopyRight";
import Footer from "../components/footer/Footer";
import HeaderHomeDefault from "../components/header/HeaderHomeDefault";
import HeroDefault from "../components/hero/HeroDefault";
import Portfolio from "../components/portfolio/Portfolio";
import ServiceOne from "../components/service/ServiceOne";
import Testimonial from "../components/testimonial/Testimonial";
import Image from "next/image";
import OnTap from "@/components/service/OnTap";
import ImageGridFour from "../components/image-grid/ImageGridFour";

export const metadata = {
  title: "Locals Taproom || Avila Beach, CA",
};

const HomeDefault = () => {
  return (
    <div className="ptf-site-wrapper animsition  ptf-is--home-default">
      {/* End Page SEO Content */}

      <HeaderHomeDefault />
      {/* End Header Default */}

      <div className="ptf-site-wrapper__inner">
        <div className="ptf-main">
          <div className="ptf-page ptf-page--home-default">
            {/*=============================================
                Start Hero Section
              ============================================== */}
            <section className="has-accent-1-background">
              {/* <!--Spacer--> */}
              <div
                className="d-lg-block ptf-spacer"
                style={{ "--ptf-xxl": "15rem" }}
              ></div>

              <div className="container-xxl">
                <HeroDefault />
              </div>
              {/* <!--Spacer--> */}npm run dev

              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "12.5rem", "--ptf-md": "6.25rem" }}
              ></div>
            </section>

            {/*=============================================
                Start Service Section
              ============================================== */}
            <section>
              {/* <!--Spacer--> */}
              <div
                id="amenities"
                className="ptf-spacer"
                style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
              ></div>
              <div className="container-xxl">
                <div className="row">
                  <div className="col-lg-3">
                    {/* <!--Animated Block--> */}
                    <div
                      className="ptf-animated-block"
                      data-aos="fade"
                      data-aos-delay="0"
                    >
                      <h2 className="h1 large-heading">Amenities</h2>
                      {/* <!--Spacer--> */}
                      <div
                        className="ptf-spacer"
                        style={{ "--ptf-xxl": "2.5rem" }}
                      ></div>
                      <p className="fz-18">
                        Step into Locals Taproom, and you'll be transported to a
                        time where the surf was king, and the vibes were pure
                        70s and 80s retro cool. The aesthetic is a nod to the
                        golden era of surfing, with every detail carefully
                        curated to evoke a sense of nostalgia and laid-back joy.
                      </p>
                    </div>
                    {/* <!--Spacer--> */}
                    <div
                      className="ptf-spacer"
                      style={{
                        "--ptf-lg": "4.375rem",
                        "--ptf-md": "2.1875rem",
                      }}
                    ></div>
                  </div>
                  <div className="col-lg-8 offset-lg-1">
                    <ServiceOne />
                  </div>
                </div>
              </div>
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
              ></div>
            </section>
            <section>
              {/* <!--Spacer--> */}
              <div
                id="our-story"
                className="ptf-spacer"
                style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
              ></div>
              <div className="container-xxl">
                <div className="row">
                  <div className="col-xl-9">
                    {/* <!--Animated Block--> */}
                    <div
                      className="ptf-animated-block"
                      data-aos="fade"
                      data-aos-delay="0"
                    >
                      <h1 className="large-heading">OUR STORY</h1>
                      {/* <!--Spacer--> */}
                      <div
                        className="ptf-spacer"
                        style={{ "--ptf-xxl": "2.5rem" }}
                      ></div>
                      <p className="fz-18">
                        Welcome to Locals Taproom, where the spirit of community
                        thrives, and the love for local craft is poured into
                        every glass. Nestled in the charming seaside town of
                        Avila Beach, our tavern is not just a bar; it's a
                        vibrant hub created by and for the people who call this
                        coastal haven home.
                      </p>
                      <p className="fz-18">
                        Meet the minds behind Locals Taproom – two proud San
                        Luis Obispo locals deeply rooted in the fabric of this
                        community. With years of shared memories and a passion
                        for fostering local connections, they embarked on a
                        journey to bring something special to their fellow
                        residents.
                      </p>
                      <p className="fz-18">
                        At Locals Taproom, we take pride in showcasing the rich
                        diversity of the local craft beer scene. Our taps
                        feature a rotating selection of brews from nearby
                        microbreweries, ensuring that our patrons experience the
                        best flavors that the region has to offer. By doing so,
                        we not only cater to our loyal regulars but also act as
                        ambassadors for the local craft beer industry, inviting
                        tourists to savor the unique tastes of our coastal
                        community. But our commitment doesn't stop there. We've
                        also uncorked the finest local wines to add to your
                        experience. Our menu is a celebration of the region's
                        flavors, a testament to the incredible talent found in
                        our own backyard.
                      </p>
                      <p className="fz-18">
                        Step into Locals Taproom, and you'll be transported to a
                        time where the surf was king, and the vibes were pure
                        70s and 80s retro cool. The aesthetic is a nod to the
                        golden era of surfing, with every detail carefully
                        curated to evoke a sense of nostalgia and laid-back joy.
                        Vinyl spins on the turntable, setting the soundtrack for
                        your evening. And here's the best part – you get to
                        choose the music from our extensive record collection,
                        making every visit a personalized trip down memory lane.
                      </p>
                      <p className="fz-18">
                        But Locals Taproom isn't just about good drinks and good
                        tunes; it's about fostering a sense of community and
                        collaboration. We believe in the power of local talent
                        and aim to be a platform for artists, musicians, beer
                        makers, and small businesses to shine. From art exhibits
                        to live performances, we're dedicated to supporting the
                        growth of our community, creating a space where
                        connections are forged, and creativity flourishes. Join
                        us at Locals Taproom, where every sip tells a story,
                        every beat sets the rhythm, and every face is a familiar
                        one. We're not just a tavern; we're a gathering place
                        for friends, neighbors, and kindred spirits. Cheers to
                        the locals, the visitors, and the shared moments that
                        make our community truly special.
                      </p>
                    </div>
                    {/* <!--Spacer--> */}
                    <div
                      className="ptf-spacer"
                      style={{ "--ptf-xxl": "6.25rem", "--ptf-md": "3.125rem" }}
                    ></div>
                  </div>
                  <div className="col-lg-12">
                    {/* <!--Animated Block--> */}
                    <ImageGridFour />
                  </div>
                </div>
              </div>
            </section>

            {/*=============================================
                Start Portfolio Section
              ============================================== */}
            <section>
              <div className="container-xxl">
                <div className="row align-items-center">
                  <div className="col-12 col-md-9">
                    {/* <!--Animated Block--> */}
                    <div
                      className="ptf-animated-block"
                      data-aos="fade"
                      data-aos-delay="0"
                    ></div>
                  </div>
                  <div className="col-12 col-md-3 text-md-end">
                    {/* <!--Spacer--> */}
                    <div
                      className="ptf-spacer"
                      style={{ "--ptf-md": "1.875rem" }}
                    ></div>
                    {/* <!--Animated Block--> */}
                  </div>
                </div>
                {/* <!--Spacer--> */}
                <div
                  className="ptf-spacer"
                  style={{ "--ptf-xxl": "6.25rem" }}
                ></div>
                {/* <!--Animated Block--> */}
                <div
                  className="ptf-animated-block"
                  data-aos="fade"
                  data-aos-delay="0"
                >
                  {/* <!--Content Slider--> */}
                  <Portfolio />
                </div>
              </div>
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "10rem", "--ptf-md": "9.5rem" }}
              ></div>
            </section>

            {/*=============================================
                Start Our Approach Section
              ============================================== */}
            <Brand />
            <div
              className="ptf-spacer"
              style={{ "--ptf-xxl": "10rem", "--ptf-md": "9.5rem" }}
            ></div>
            <section
              className="has-accent-1-background"
              style={{
                backgroundImage: `url(${
                  "" + "/assets/img/root/service-bubble.png"
                })`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "100% calc(100% + 120px)",
              }}
            >
              {/* <!--Spacer--> */}
              <div
                id="on-tap"
                className="ptf-spacer"
                style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
              ></div>
              <div className="container-xxl">
                {/* <!--Animated Block--> */}
                <div
                  className="ptf-animated-block"
                  data-aos="fade"
                  data-aos-delay="0"
                >
                  <h2 className="h1 large-heading">On Tap</h2>
                </div>
                {/* <!--Spacer--> */}
                <div
                  className="ptf-spacer"
                  style={{ "--ptf-xxl": "7.5rem", "--ptf-md": " 3.75rem" }}
                ></div>
                <OnTap />
              </div>
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
              ></div>
            </section>

            {/*=============================================
                Start Brand and Counterup Section
              ============================================== */}
            <section>
              {/* <!--Spacer--> */}
              <div
                id="merch"
                className="ptf-spacer"
                style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
              ></div>
              <div className="container-xxl">
                <div className="row">
                  <h1 className="large-heading">MERCH</h1>
                  <div className="col-12">
                    {/* <!--Animated Block--> */}
                    <div
                      className="ptf-animated-block"
                      data-aos="fade"
                      data-aos-delay="0"
                    >
                      {" "}
                    </div>
                    {/* <!--Spacer--> */}
                  </div>
                </div>
              </div>
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
              ></div>
            </section>

            <section>
              <div className="container-xxl">
                {/* <!--Divider--> */}
                <div className="ptf-divider"></div>
              </div>
            </section>

            <section>
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
              ></div>
              <div className="container-xxl">
                {/* <!--Animated Block--> */}
                <div
                  className="ptf-animated-block"
                  data-aos="fade"
                  data-aos-delay="0"
                >
                  <div
                    className="row"
                    style={{
                      "--bs-gutter-x": "3.75rem",
                      "--bs-gutter-y": "7.5rem",
                    }}
                  >
                    <Merch />
                  </div>
                </div>
              </div>
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
              ></div>
            </section>

            {/*=============================================
                End Blog Section
              ============================================== */}
          </div>
        </div>
        {/* End .ptf-main */}

        {/* <!--Footer--> */}
        <footer className="ptf-footer ptf-footer--style-1">
          <div className="container-xxl">
            <div className="ptf-footer__top">
              <Footer />
            </div>
            <div className="ptf-footer__bottom">
              <CopyRight />
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default HomeDefault;
