import CountDown from "../../../components/CountDown";
import HeaderComingSoon from "../../../components/header/HeaderComingSoon";
import Newsletter from "../../../components/Newsletter";
import Image from "next/image";

export const metadata = {
  title: "Coming Soon || Local's Taproom Avila Beach CA",
};

const ComingSoon = () => {
  return (
    <>
      <HeaderComingSoon />
      {/* End Header */}

      <div className="ptf-main">
        <div className="ptf-page ptf-page--coming-soon">
          <section
            className="min-vh-100 jarallax"
            style={{
              backgroundImage: `url(${
                "" + "/assets/img/root/coming-soon-background.png"
              })`,
            }}
          >
            {/* <!--Spacer--> */}
            <div
              className="ptf-spacer"
              style={{ "--ptf-xxl": "14.375rem", "--ptf-md": "12.1875rem" }}
            ></div>
            <div className="container-xxl">
              <div className="row align-items-center">
                <div className="col-xl-7">
                  {/* <!--Animated Block--> */}
                  <div
                    className="ptf-animated-block"
                    data-aos="fade"
                    data-aos-delay="0"
                  >
                    <h1 className="large-heading">Opening Dec 15th 2023</h1>
                    {/* <!--Spacer--> */}
                    <div
                      className="ptf-spacer"
                      style={{ "--ptf-xxl": "1.5625rem" }}
                    ></div>
                    <p
                      className="fz-18 has-3-color"
                      style={{ maxWidth: "37.5rem" }}
                    >
                      Come grab a drink with us on our opening day. We are so
                      excited to pour you a cold one!
                    </p>
                  </div>

                  {/* <!--Spacer--> */}
                  <div
                    className="ptf-spacer"
                    style={{ "--ptf-xxl": "6.25rem", "--ptf-md": "3.125rem" }}
                  ></div>
                  <CountDown />
                  {/* <!--Spacer--> */}
                  <div
                    className="ptf-spacer"
                    style={{ "--ptf-xxl": "5rem", "--ptf-md": "3.75rem" }}
                  ></div>
                  {/* <!--Animated Block--> */}
                  <div
                    className="ptf-animated-block"
                    data-aos="fade"
                    data-aos-delay="200"
                  >
                    <p className="fz-24 has-black-color">
                      Subscribe to our email list for special events and
                      launches!
                      <br />
                      Don’t worry! Your email is safe with us.
                    </p>
                    {/* <!--Spacer--> */}
                    <div
                      className="ptf-spacer"
                      style={{
                        "--ptf-xxl": "3.125rem",
                        "--ptf-md": "1.5625rem",
                      }}
                    ></div>
                    {/* <!--Spacer--> */}
                    <Newsletter />
                  </div>
                </div>
                <div className="col-xl-5 d-none d-xl-block">
                  {/* <!--Animated Block--> */}
                  <div
                    className="ptf-animated-block"
                    data-aos="fade"
                    data-aos-delay="300"
                  >
                    <div className="text-center">
                      <Image
                        width={1200}
                        height={1200}
                        src="/assets/img/coming-soon-cta.jpg"
                        alt=""
                        style={{
                          maxWidth: "33.25rem",
                          width: "100%",
                          height: "100%",
                        }}
                        loading="lazy"
                      />
                    </div>
                  </div>
                  {/* <!--Spacer--> */}
                  <div
                    className="ptf-spacer"
                    style={{ "--ptf-xl": "5.625rem", "--ptf-md": "2.8125rem" }}
                  ></div>
                </div>
              </div>
            </div>
            {/* <!--Spacer--> */}
            <div
              className="ptf-spacer"
              style={{ "--ptf-xxl": "10.375rem", "--ptf-md": "7.1875rem" }}
            ></div>
          </section>
        </div>
      </div>
    </>
  );
};

export default ComingSoon;
