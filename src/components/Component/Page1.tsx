import React from "react";
import logo from "./logo.svg";
import styles from "./Page1.module.scss";
import check from "./check.svg";
import man from "./man.svg";
import man2 from "./man2.svg";
import smooth from "./smooth.svg";
import elegant from "./elegant.svg";
import parse from "html-react-parser";
import { NavHashLink } from "react-router-hash-link";
const Page1 = () => {
  const goToTop = (_) => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className={styles.page1}>
      <div className={styles.title}>
        <h1> PACHETE </h1>
      </div>

      <div className={styles.cardsContainer}>
        <div className={styles.card}>
          <img className={styles.manLogo} src={man} alt="man" />

          <div className={styles.cardStyle}>
            <div className={styles.cardTitle}>Branding Basic</div>

            <div className={styles.euro}>600 €</div>

            <div className={styles.cardInfo}>Pachet creat special pentru firmele la inceput de drum si nu numai.</div>

            <div className={styles.pachete}>
              <div>
                <img src={check} alt="check" />
                Logo principal
              </div>
              <div>
                <img src={check} alt="check" />
                Logo aternativ & logo icon
              </div>
              <div>
                <img src={check} alt="check" />
                Paleta de culori branding
              </div>
              <div>
                <img src={check} alt="check" />
                Sistem de fonturi
              </div>
              <div>
                <img src={check} alt="check" />
                Prezentare branding
              </div>
              <div>
                <img src={check} alt="check" />
                Model de carte de vizita
              </div>
              <div>
                <img src={check} alt="check" />
                Kit social media
              </div>
            </div>

            <div className={styles.feature}>
              <div className={styles.add1}>Additional Feature:</div>
              <div className={styles.add2}>Se percepe avans de 50% la inceperea proiectului</div>
            </div>

            <div className={styles.cardButton}>
              <NavHashLink onClick={goToTop} className={styles.HashLinkStyle} to={"/contact"}>
                <button className={styles.pricesButton}>{"Contacteaza-ne"}</button>
              </NavHashLink>
            </div>
          </div>
        </div>

        <div className={styles.card}>
          <img className={styles.manLogo2} src={man2} alt="man" />

          <div className={styles.cardStyle}>
            <div className={styles.cardTitle}>Branding Vip</div>

            <div className={styles.euro}>1100 €</div>

            <div className={styles.cardInfo}>Pachet creat pentru companiile care vor un rebranding sau nu numai.</div>

            <div className={styles.pachete}>
              <div>
                <img src={check} alt="check" />
                Logo principal
              </div>
              <div>
                <img src={check} alt="check" />
                Logo aternativ & logo icon
              </div>
              <div>
                <img src={check} alt="check" />
                Logo in diverse culori
              </div>
              <div>
                <img src={check} alt="check" />
                Paleta de culori branding
              </div>
              <div>
                <img src={check} alt="check" />
                Sistem de fonturi
              </div>
              <div>
                <img src={check} alt="check" />
                Prezentare ampla branding
              </div>
              <div>
                <img src={check} alt="check" />
                Kit social media
              </div>
              <div>
                <img src={check} alt="check" />
                Icon Magazinplay , App Store
              </div>
              <div>
                <img src={check} alt="check" />
                Semnatura digitala
              </div>
              <div>
                <img src={check} alt="check" />2 cartii de vizita premium nelimitate ( metal )
              </div>
              <div>
                <img src={check} alt="check" />
                Designe Web ( Figma )
              </div>
            </div>

            <div className={styles.feature}>
              <div className={styles.add1}>Additional Feature:</div>
              <div className={styles.add2}>Se percepe avans de 50% la inceperea proiectului</div>
            </div>

            <div className={styles.cardButton}>
              <NavHashLink onClick={goToTop} className={styles.HashLinkStyle} to={"/contact"}>
                <button className={styles.pricesButton}>{"Contacteaza-ne"}</button>
              </NavHashLink>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.smooth}>
        <img src={smooth} alt="smooth" />
      </div>

      <div className={styles.elegantCard}>
        <div className={styles.logoElegant}>
          <img src={elegant} alt="elegant" />
        </div>

        <div className={styles.textElegant}>
          <p>
            {parse(`<strong>Cărțile de vizită </strong> au un <strong>rol deosebit de important</strong> în sfera afacerilor, fiind un mijloc foarte eficient de
            transmitere a informațiilor, ce <strong>impun încredere și profesionalism.</strong> <br> <strong>Eleganța și stilul</strong> pot fi transmise de acum
            și prin intermediul noului model de carte de vizită. Acest model este unul <strong>premium</strong> și este realizat din
            meteriale metalice de foarte bună calitate ce își păstrează proprietățile in timp. Aceste cărți <strong>sunt rezistente
            la apă</strong>, iar materialul permite <strong>realizarea unui design impecabil</strong>, dar și <strong>gravarea unui cod QR</strong> cu o utilizare
            nelimitată. Unul dintre avantajele acestui model este că poate înlocui clasicele cărți de vizită din hârtie
            prin reducerea numărului acestora de la 1000 la unul singur.`)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page1;
