"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menuContent = [
  {
    name: "Home",
    //activeClass: "sf-with-ul",
    page: "home",
    //menuClass: "two-columns current-menu-item",
    dropDownItems: [
      // {
      //   name: "Home Default",
      //   routerPath: "/home-default",
      // },
      // {
      //   name: "Home Studio",
      //   routerPath: "/home-studio",
      // },
      // {
      //   name: "Home Agency",
      //   routerPath: "/home-agency",
      // },
      // {
      //   name: "Home Minimal",
      //   routerPath: "/home-minimal",
      // },
      // {
      //   name: "Home Dark",
      //   routerPath: "/home-dark",
      // },
      // {
      //   name: "Home Freelancer",
      //   routerPath: "/home-freelancer",
      // },
      // {
      //   name: "Home Trending",
      //   routerPath: "/home-trending",
      // },
      // {
      //   name: "Home Modern",
      //   routerPath: "/home-modern",
      // },
    ],
  },
  {
    name: "Our Story",
    page: "#",
    activeClass: "",
    menuClass: "",
    dropDownItems: [
      // {
      //   name: "Works Grid",
      //   routerPath: "/works-grid",
      // },
      // {
      //   name: "Works Masonry",
      //   routerPath: "/works-masonry",
      // },
      // {
      //   name: "Works Listing",
      //   routerPath: "/works-listing",
      // },
      // {
      //   name: "Works Carousel",
      //   routerPath: "/works-carousel",
      // },
      // {
      //   name: "Works Showcase",
      //   routerPath: "/works/3",
      // },
    ],
  },
  {
    name: "On Tap",
    activeClass: "",
    menuClass: "",
    page: "#on-tap",

    dropDownItems: [
      {
        name: "Man Rock",
        routerPath: "#on-tap-man-rock",
      },
      {
        name: "There Does Not Exist",
        routerPath: "#on-tap-there-does-not-exist",
      },
      {
        name: "Humdinger",
        routerPath: "#on-tap-humdinger",
      },
      {
        name: "Liquid Gravity",
        routerPath: "#on-tap-liquid-gravity",
      },
      {
        name: "Matthew's Vineyard",
        routerPath: "#on-tap-matthews-vineyard",
      },
    ],
  },
  {
    name: "Merch",
    activeClass: "",
    menuClass: "",
    page: "blog",

    dropDownItems: [
  
    ],
  },
  {
    name: "Contact Us",
    activeClass: "",
    page: "contact",
    menuClass: "two-columns",
    dropDownItems: [
      // {
      //   name: "About Us",
      //   routerPath: "/about-us",
      // },
      // {
      //   name: "About Me",
      //   routerPath: "/about-me",
      // },
      // {
      //   name: "Services",
      //   routerPath: "/service",
      // },
      // {
      //   name: "Service Details",
      //   routerPath: "/service/5",
      // },
      // {
      //   name: "Pricing",
      //   routerPath: "/pricing",
      // },
      // {
      //   name: "Team",
      //   routerPath: "/team",
      // },
      // {
      //   name: "FAQ",
      //   routerPath: "/faq",
      // },
      // {
      //   name: "Contact",
      //   routerPath: "/contact",
      // },
      // {
      //   name: "Page 404",
      //   routerPath: "/404",
      // },
      // {
      //   name: "Coming Soon",
      //   routerPath: "/coming-soon",
      // },
    ],
  },
];

const DropdownMenu = () => {
  let currentPage = "";
  const pathname = usePathname();

  if (pathname.split("/")[1].trim() != "home-default") {
    currentPage = pathname.split("-")[0].split("/")[1];

    if (
      currentPage !== "works" &&
      currentPage !== "blog" &&
      currentPage !== "home"
    ) {
      currentPage = "others";
    }
  }

  return (
    <ul className="sf-menu">
      {menuContent.map((item, i) => (
        <li className={`menu-item-has-children ${item.menuClass}`} key={i}>
          <a href="#" className={item.activeClass}>
            <span className={item.page == currentPage ? "active-page" : ""}>
              {item.name}
            </span>
          </a>

          {item.dropDownItems && item.dropDownItems.length > 0 && (
            <ul className="sub-menu mega">
              {item.dropDownItems.map((val, idx) => (
                <li key={idx}>
                  <Link href={val.routerPath}>
                    <span
                      className={
                        val.routerPath === pathname ? "active-page" : ""
                      }
                    >
                      {val.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
};

export default DropdownMenu;
