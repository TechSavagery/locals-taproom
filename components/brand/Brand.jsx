"use client";

import Image from "next/image";

const brandContent = [
  {
    delayAnimation: "0",
    hoverBg: "#F3DF4D",
    imgHeight: "100px",
    imgName: "man-rock",
    title: "Man Rock",
  },
  {
    delayAnimation: "100",
    hoverBg: "#f3f7fc",
    imgHeight: "100px",
    imgName: "tdne",
    title: "There Does Not Exist",
  },
  {
    delayAnimation: "200",
    hoverBg: "#f9fcf3",
    imgHeight: "100px",
    imgName: "humdinger",
    title: "Humdinger",
  },
  {
    delayAnimation: "300",
    hoverBg: "#f9f9f9",
    imgHeight: "100px",
    imgName: "liquid-gravity",
    title: "Liquid Gravity",
  },
  {
    delayAnimation: "400",
    hoverBg: "#fdf4fb",
    imgHeight: "100px",
    imgName: "matthews-vineyard",
    title: "Matthew's Vineyard",
  },
];

const Brand = () => {
  return (
    <div
      className="row justify-content-center"
      style={{ "--bs-gutter-y": "2rem" }}
    >
      {brandContent.map((item, i) => (
        <div
          className="col-6 col-md-5 col-lg-2 d-flex align-items-center"
          key={i}
        >
          {/* <!--Animated Block--> */}
          <div
            className="ptf-animated-block w-100"
            data-aos="fade"
            data-aos-delay={item.delayAnimation}
          >
            {/* <!--Partner Box--> */}
            <div
              className="ptf-partner-box mx-auto"
              style={{
                "--ptf-hover-background": item.hoverBg,
                "--ptf-image-height": item.imgHeight,
              }}
            >
              <div className="ptf-partner-box__image">
                <Image
                  width={200}
                  height={200}
                  style={{
                    width: "108px",
                    height: "90px",
                    objectFit: "contain",
                  }}
                  src={`/assets/img/root/on-tap/${item.imgName}.png`}
                  alt={item.title}
                  loading="lazy"
                />
              </div>
              <h6 className="ptf-partner-box__title">{item.title}</h6>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Brand;
