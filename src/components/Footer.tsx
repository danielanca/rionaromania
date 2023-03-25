import React from "react";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import { uniqueId } from "lodash";
import images from "../data/images";
import styles from "./../components/Footer.module.scss";
import strings from "../data/strings.json";
import parse from "html-react-parser";
import allPathsURL from "./../data/allPathsURL";
import { socialString } from "./../data/componentStrings";

const Footer = () => {
  const { pathname } = useLocation();

  let navItems = strings.navItemsFooter;

  return (
    <>
      {!pathname.includes(allPathsURL.adminURL) && !pathname.includes(allPathsURL.loginURL) && (
        <div className={styles.footerBlock}>
          <div className={styles.fluidHandler}>
            <div className={styles.logoContainer}>
              <img src={images.rionaLogo} />
            </div>
            <div className={styles.description}>
              <p>
                {parse(
                  `Conceptualizăm, cercetăm și dezvoltăm soluții vizuale și strategice, care redefinesc experiența de brand. <br> Toate drepturile sunt rezervate. Copyright © 2004 - 2023, Riona SRL`
                )}
              </p>
            </div>
            <div className={styles.logoSocials}>
              <div className={styles.socialsContainer}>
                {Object.values(socialString).map((item) => (
                  <a href={item.link} target="_blank">
                    <img src={item.imageSrc} />
                  </a>
                ))}
              </div>
            </div>
            <div className={styles.navItems}>
              <ul className={styles.navItemsUL}>
                {Object.values(navItems).map((item) => (
                  <li key={uniqueId()}>{item.text}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;
