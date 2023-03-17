import React, { useEffect, useState } from "react";
import { HashLink, HashLink as Link, NavHashLink } from "react-router-hash-link";
import ReactGA from "react-ga4";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import TopBanner from "./TopBanner";
import MenuMobileSide from "./MenuMobileSide";
// import MenuMobile from "./MenuMobile";
import MenuMobile from "./MenuMobile/MenuMobile";
import styles from "./Navbar.module.scss";
import images from "../data/images";
import strings from "../data/strings.json";

const NavBar = () => {
  let { navMenu: navItems, cart } = strings;
  const { pathname } = useLocation();

  const sendAnalyticsIdea = () => {
    ReactGA.event("User pressed on gallery");
  };

  return (
    <>
      {!pathname.includes("/admin") && !pathname.includes("/login") && (
        <>
          <div className={styles.wrapper}>
            <div className={styles.logoWrapper}>
              <NavHashLink className={styles.HashLinkStyle} to={"/"}>
                <img src={images.rionaLogo} />
              </NavHashLink>
            </div>
            <MenuMobile />
            <div className={styles.menuItems}>
              <ul className={styles.navItems}>
                <li className={styles.active}>
                  <NavHashLink className={styles.HashLinkStyle} to={"/"}>
                    {"Home"}
                  </NavHashLink>
                </li>

                <li>
                  <NavHashLink className={styles.HashLinkStyle} to={"/pachete"}>
                    {"Pachete"}
                  </NavHashLink>
                </li>
                <li>
                  <NavHashLink className={styles.HashLinkStyle} to={"/contact"}>
                    {"Contact"}
                  </NavHashLink>
                </li>
              </ul>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default NavBar;

{
  /* <ul className={styles.ulMenuEnd}>
                <li onClick={() => sendAnalyticsIdea()} className={styles.liItem}>
                  <NavHashLink className={styles.HashLinkStyle} smooth to={navItems.ourProducts.link}>
                    {navItems.ourProducts.name}
                  </NavHashLink>
                </li>
                <li className={styles.liItem}>
                  <NavHashLink className={styles.HashLinkStyle} to={navItems.blog.link}>
                    {navItems.blog.name}
                  </NavHashLink>
                </li>
              </ul> */
}
