import React, { useState, useRef } from "react";
import styles from "./MenuMobile.module.scss";
import { FaAngleDown } from "react-icons/fa";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "./logo.svg";
import Group from "./Group.svg";
import home from "./home.svg";
import portofoliu from "./portofoliu.svg";
import star from "./Vector.svg";
import phone from "./phone.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { NavHashLink } from "react-router-hash-link";
import images from "../../data/images";
const MenuMobile = () => {
  const navRef = useRef(null);
  const showNavbar = () => {
    navRef.current.classList.toggle(styles.responsiveNavbar);
  };

  return (
    <div className={styles.header}>
      <NavHashLink className={styles.HashLinkStyle} to={"/"}>
        <img src={images.rionaLogo} />
      </NavHashLink>

      <nav ref={navRef}>
        <a href="/" className={styles.logoInterior}>
          <img src={logo} alt="riona-logo" />
        </a>

        <div className={styles.menu}>
          <NavHashLink onClick={showNavbar} className={styles.HashLinkStyle} to={"/"}>
            <img src={home} />
            Home
          </NavHashLink>
          <NavHashLink onClick={showNavbar} className={styles.HashLinkStyle} to={"/pachete"}>
            <img src={star} />
            Pachete
          </NavHashLink>
          <NavHashLink onClick={showNavbar} className={styles.HashLinkStyle} to={"/contact"}>
            <img src={phone} />
            Contact
          </NavHashLink>
        </div>
        <div className={styles.social}>
          <a href="/" className={styles.youtube}>
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a href="https://www.facebook.com/profile.php?id=100086601934343" className={styles.facebook}>
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
          <a href="https://www.instagram.com/riona.romania" className={styles.instagram}>
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
        </div>

        <button className={styles.closeButton} onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className={styles.closeButton} onClick={showNavbar}>
        <img className={styles.barLogo} src={Group} alt="/" />
      </button>
    </div>
  );
};

export default MenuMobile;
