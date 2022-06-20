import { useRef, useState } from "react";
import { BrowserRouter as Router, Routes, Route, BrowserRouter, useLocation } from "react-router-dom";

import arrow_down from "./../media/assets/pics/prezentareCarbune/arrow_down.svg";
import flagRomania from "./../media/assets/pics/prezentareCarbune/flagRO.jpg";
import Relaxbar from "./MiniComponents/Footers/Relaxbar";

import styles from "./../components/FooterMontan.module.scss";

const FooterMontan = () => {
  const [openedContainer, setContainer] = useState(0);
  const footerOpener = useRef(null);
  const { pathname } = useLocation();

  const gotoElement = () => {
    window.scrollTo({ top: footerOpener.current.scrollIntoView(), behavior: "smooth" });
  };
  const clickHandler = (index: number) => {
    if (index === openedContainer) setContainer(index);
    else {
      setContainer(index);
      gotoElement();
    }
  };

  return (
    <>
      {!pathname.includes("/admin") && !pathname.includes("/login") && (
        <div className={styles.fluidHandler}>
          <Relaxbar />
          <div className={"row " + styles.largeFooter}>
            <div className="col-md-4">
              <div onClick={clickHandler.bind(this, 1)} className={styles.clickableBox}>
                {/* <div className={styles.infoBoxFooter} ref={footerOpener}>
                  <p className={styles.clickText}>{"Date Companie"}</p>{" "}
                  <img className={styles.arrowIcon} src={arrow_down} />
                </div> */}
                {
                  // <div className={openedContainer === 1 ? styles.showPop : `${styles.showPop} ${styles.hide}`}>
                  <div className="row">
                    <div className={"col " + styles.footItem}>
                      <h3 className={styles.footerTittleCenter}>{"LINK-URI UTILE"}</h3>
                      <p className={styles.classicText}>{"Metode de plata"}</p>
                      <p className={styles.classicText}>{"Politica de Retur"}</p>
                      <p className={styles.classicText}>{"Online Dispute Resolution"}</p>
                      <p className={styles.classicText}>{"ANPC"}</p>
                    </div>
                  </div>
                  // </div>
                }
              </div>
            </div>
            <div className="col-md-4">
              {/* <div onClick={clickHandler.bind(this, 2)} className={styles.clickableBox}> */}
              {/* <div className={styles.infoBoxFooter} ref={footerOpener}>
                <p className={styles.clickText}>{"informatii LEGALE"}</p>
                <img className={styles.arrowIcon} src={arrow_down} />
              </div> */}
              {
                // <div className={openedContainer === 2 ? styles.showPop : `${styles.showPop} ${styles.hide}`}>
                <div className="row">
                  <div className={"col " + styles.footItem}>
                    <h3 className={styles.footerTittleCenter}>{"Date Comerciale"}</h3>
                    <p className={styles.classicText}>{"RUS L Emil Cristian Intreprindere Individuală"}</p>
                    <p className={styles.classicText}>{"F12/696/23.04.2019"}</p>
                    <p className={styles.classicText}>{"41030416"}</p>
                    <p className={styles.classicText}>{"str. LIVIU REBREANU, loc. Turda jud.Cluj"}</p>
                  </div>
                </div>
                // </div>
              }
              {/* </div> */}
            </div>
            <div className="col-md-4">
              <div onClick={clickHandler.bind(this, 3)} className={styles.clickableBox}>
                {/* <div className={styles.infoBoxFooter} ref={footerOpener}>
                  <p className={styles.clickText}>{"informatii LEGALE"}</p>
                  <img className={styles.arrowIcon} src={arrow_down} />
                </div> */}
                {/* <div className={openedContainer === 3 ? styles.showPop : `${styles.showPop} ${styles.hide}`}> */}
                <div className="row">
                  <div className={"col " + styles.footItem}>
                    <h3 className={styles.footerTittleCenter}>{"MAGAZINUL NOSTRU"}</h3>
                    <p className={styles.classicText}>{"Metode de plata"}</p>
                    <p className={styles.classicText}>{"Politica de Retur"}</p>
                    <p className={styles.classicText}>{"Online Dispute Resolution"}</p>
                    <p className={styles.classicText}>{"ANPC"}</p>
                  </div>
                </div>
                {/* </div> */}
              </div>
            </div>

            <div className={styles.wideBanner}>
              <img className={styles.flagStyle} src={flagRomania} />
              <p className={styles.statementRO}>{"Produs Românesti handmade"}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FooterMontan;
