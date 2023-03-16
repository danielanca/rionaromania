import React from "react";

import styles from "./InformationWrap.module.scss";
import parse from "html-react-parser";
import images from "../../../data/images";
const InformationWrap = () => {
  return (
    <div className={styles.infoWrap}>
      <div className={styles.textTitle}>
        <img className={styles.pinIcon} src={images.infoIcon} />
        <h2>{"Informatie Utila"}</h2>
      </div>

      <h3>
        {parse(
          `Nu orice afacere este un brand, cum sunteti tentati sa credem. <br><span class="topText">Brandul</span> &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    reprezinta fuziunea dintre mai multe elemente care dau nastere produsului sau companiei noastre, fuziune care ne face unici, diferiti, recognoscibili. Cand vorbim despre brand, ne putem raporta la doua dimensiuni: <br><br> dimensiunea reala, oferita de caracteristicile brandului (ce este si ce face) <br>dimensiunea perceptiva, legata de felul in care publicul vede ce facem, de felul in care suntem perceputi.`
        )}
      </h3>
    </div>
  );
};

export default InformationWrap;
