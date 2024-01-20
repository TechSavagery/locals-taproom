"use client";

import { React, useState } from "react";
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
];

const MobileMenu = () => {
  let currentPage = "";
  const pathname = usePathname();
  const [toggled, setToggled] = useState(false);

  const handleMenuItemClick = () => {
    // Collapse the sidebar
    setToggled(false);
  };

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
        <ProSidebar toggled={toggled}>
          <SidebarContent>
            <Menu className="sidebar-menu_wrapper">
              <MenuItem className="">
                {" "}
                <a href="/">Home</a>
              </MenuItem>
              <MenuItem className="">
                {" "}
                <a href="/#our-story">Our Story</a>
              </MenuItem>
              {menuContent.map((item, i) => (
                <SubMenu
                  className={item.page == currentPage ? "active-page" : ""}
                  title={item.name}
                  key={i}
                >
                  {item.dropDownItems.map((val, i) => (
                    <MenuItem onClick={handleMenuItemClick} key={i}>
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
              <MenuItem className="">
                {" "}
                <a href="/#amenities">Amenities</a>
              </MenuItem>
              <MenuItem className="">
                {" "}
                <a href="/#merch">Merch</a>
              </MenuItem>
              <MenuItem className="">
                {" "}
                <a href="/contact">Contact</a>
              </MenuItem>
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
