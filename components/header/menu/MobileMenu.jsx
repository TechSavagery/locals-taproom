"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarContent,
} from "react-pro-sidebar";

import Social from "../../social/Social";

const menuContent = [
  {
    name: "Home",
    page: "home",
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
    page: "works",
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
    page: "#",
    dropDownItems: [
      {
        name: "Man Rock",
        routerPath: "/#on-tap-man-rock",
      },
      {
        name: "There Does Not Exist",
        routerPath: "/#on-tap-there-does-not-exist",
      },
      {
        name: "Humdinger",
        routerPath: "/#on-tap-humdinger",
      },
      {
        name: "Liquid Gravity",
        routerPath: "/#on-tap-liquid-gravity",
      },
      {
        name: "Matthew's Vineyard",
        routerPath: "/#on-tap-matthews-vineyard",
      },
    ],
  },
  {
    name: "Amenities",
    activeClass: "",
    menuClass: "",
    page: "/#amenities",

    dropDownItems: [],
  },
  {
    name: "Merch",
    page: "/#merch",
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
  {
    name: "Contact Us",
    activeClass: "",
    menuClass: "",
    page: "/contact",

    dropDownItems: [],
  },
];

const MobileMenu = () => {
  let currentPage = "";
  const pathname = usePathname();

  currentPage = pathname.split("-")[0].split("/")[1];

  if (
    currentPage !== "works" &&
    currentPage !== "blog" &&
    currentPage !== "home"
  ) {
    currentPage = "others";
  }
  // titleStyle={item.page == currentPage ? {color: '#fa4529'}:''}

  return (
    <>
      <div className="ptf-offcanvas-menu__navigation">
        <ProSidebar>
          <SidebarContent>
            <Menu className="sidebar-menu_wrapper">
              {menuContent.map((item, i) => (
                <SubMenu
                  className={item.page == currentPage ? "active-page" : ""}
                  title={item.name}
                  key={i}
                >
                  {item.dropDownItems.map((val, i) => (
                    <MenuItem key={i}>
                      <Link
                        className={
                          val.routerPath == pathname ? "active-page" : ""
                        }
                        href={val.routerPath}
                      >
                        {val.name}
                      </Link>
                    </MenuItem>
                  ))}
                </SubMenu>
              ))}
            </Menu>
          </SidebarContent>
        </ProSidebar>
      </div>
      {/* End .ptf-offcanvas-menu__navigation */}

      <div className="ptf-offcanvas-menu__footer">
        <p className="ptf-offcanvas-menu__copyright">
          @{new Date().getFullYear()} <span>Locals Taproom</span>. All Rights
          Reserved. <br />.
        </p>
        <Social />
      </div>
      {/* End .ptf-offcanvas-menu__footer */}
    </>
  );
};

export default MobileMenu;
