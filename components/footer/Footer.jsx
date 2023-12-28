"use client";

import React from "react";
import Link from "next/link";
import Address from '../../components/Address'

const linkList = [
  {
    itemName: "Home",
    link: "/",
  },
  {
    itemName: "Our Story",
    link: "/",
  },
  {
    itemName: "On Tap",
    link: "/",
  },
  {
    itemName: "Merch",
    link: "/",
  },
  {
    itemName: "Contact US",
    link: "/",
  },
];

const Product = [
  {
    itemName: "Man Rock",
    link: "/",
  },
  {
    itemName: "There Does Not Exist",
    link: "/",
  },
  {
    itemName: "Humdinger",
    link: "/",
  },
  {
    itemName: "Liquid Gravity",
    link: "/",
  },
  {
    itemName: "Matthew's Vineard",
    link: "/",
  },
];

const Footer = () => {
  return (
    <div className="row">
      <div className="col-12 col-xl-6">
        {/* <!--Animated Block--> */}
        <div className="ptf-animated-block" data-aos="fade" data-aos-delay="0">
          <Address/>
        </div>
      </div>
      <div className="col-12 col-md-6 col-xl-3">
        {/* <!--Animated Block--> */}
        <div
          className="ptf-animated-block"
          data-aos="fade"
          data-aos-delay="100"
        >
          <div className="ptf-widget ptf-widget-links has-black-color">
            <h4 className="ptf-widget-title">Links</h4>
            <ul>
              {linkList.map((val, i) => (
                <li key={i}>
                  <a href={val.link}>{val.itemName}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="col-12 col-md-6 col-xl-3">
        {/* <!--Animated Block--> */}
        <div
          className="ptf-animated-block"
          data-aos="fade"
          data-aos-delay="200"
        >
          <div className="ptf-widget ptf-widget-text">
            <h4 className="ptf-widget-title">On Tap</h4>
            <div className="ptf-widget ptf-widget-links has-black-color">
              <ul>
                {Product.map((val, i) => (
                  <li key={i}>
                    <a href={val.link}>{val.itemName}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
