"use client";

import React from "react";
import Image from "next/image";
import ImageGridFive from "../../components/image-grid/ImageGridFour";
const heroContent = {
  title: "Locals Taproom",
  subTitle1: "Avila Beach",
  subTitle2: "California",
  subTitleDescription1: "every sip tells a story,",
  subTitleDescription2: "every beat sets the rhythm,",
  subTitleDescription3: "and every face is a familiar one.",
  detailsDescription: `Welcome to Locals Taproom, where the spirit of community thrives, and the love for local craft is poured into every glass. Nestled in the charming seaside town of Avila Beach, our tavern is not just a bar; it's a vibrant hub created by and for the people who call this coastal haven home.`,
};

const HeroDefault = () => {
  return (
    <div className="row">
      <div className="col-xl-9">
        <div className="d-xl-none d-flex justify-content-center">
          <ImageGridFive />
        </div>
        {/* <!--Animated Block--> */}
        <div className="ptf-animated-block" data-aos="fade" data-aos-delay="0">
          <h1 className="fz-130 fz-130--lg fz-90--md">{heroContent.title}</h1>
        </div>
        {/* <!--Spacer--> */}
        <div className="ptf-spacer" style={{ "--ptf-xxl": "0.625rem" }}></div>
        {/* <!--Animated Block--> */}
        <div
          className="ptf-animated-block"
          data-aos="fade"
          data-aos-delay="100"
        >
          <p
            className="
                fz-40
                fw-bold
                lh-1p3
                text-uppercase
                has-white-color
              "
          >
            {heroContent.subTitle1} <br />
            {heroContent.subTitle2}
          </p>
        </div>
        {/* <!--Spacer--> */}
        <div
          className="ptf-spacer"
          style={{
            "--ptf-xxl": "8.125rem",
            "--ptf-md": "4.0625rem",
          }}
        ></div>
        {/* <!--Animated Block--> */}
        <div
          className="ptf-animated-block"
          data-aos="fade"
          data-aos-delay="200"
        >
          <p
            className="
                fz-30
                fz-20--md
                fz-2--sm
                fw-extrabold
                lh-1p1
                has-white-color
              "
          >
            {heroContent.subTitleDescription1} <br />
            {heroContent.subTitleDescription2}
            <br />
            {heroContent.subTitleDescription3}
          </p>
        </div>
        {/* <!--Spacer--> */}
        <div
          className="ptf-spacer"
          style={{
            "--ptf-xxl": "9.375rem",
            "--ptf-md": "4.6875rem",
          }}
        ></div>
        <div className="row">
          <div className="col-xl-8">
            <div style={{ maxWidth: "545px" }}>
              {/* <!--Animated Block--> */}
              <div
                className="ptf-animated-block"
                data-aos="fade"
                data-aos-delay="0"
              >
                {/* <!--Divider--> */}
                <div className="ptf-divider"></div>
                {/* <!--Spacer--> */}
                <div
                  className="ptf-spacer"
                  style={{
                    "--ptf-xxl": "4.375rem",
                    "--ptf-md": "2.1875rem",
                  }}
                ></div>
                <p className="fz-24 has-black-color">
                  {heroContent.detailsDescription}
                </p>
              </div>
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{
                  "--ptf-xxl": "6.875rem",
                  "--ptf-md": "3.4375rem",
                }}
              ></div>
              {/* <!--Animated Block--> */}
              <div
                className="ptf-animated-block"
                data-aos="fade"
                data-aos-delay="0"
              >
                {/* <!--Button--> */}
                <a
                  className="ptf-btn ptf-btn--primary ptf-btn--inversed"
                  href="about-us.html"
                  target="_self"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-3 d-none d-xl-block">
        {/* <!--Spacer--> */}
        <div className="ptf-spacer" style={{ "--ptf-xxl": "3.75rem" }}></div>
        {/* <!--Animated Block--> */}
        <div
          className="ptf-animated-block"
          data-aos="fade"
          data-aos-delay="200"
        >
          {/* <!--Mask Image--> */}
          <div
            className="ptf-mask-image"
            style={{ maxWidth: "18.25rem" }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default HeroDefault;
