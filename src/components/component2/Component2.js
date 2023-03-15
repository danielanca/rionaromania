import React from "react";
import "./Component2.css";
import eclipse2 from "./Ellipse 4.svg";

const Component2 = () => {
  return (
    <div className="container2">
      <div className="img-container2">
        <img src={eclipse2} alt="/" />
      </div>

      <div className="wrapper">
        <div className="title-container2">
          <span>
            Ce este <span className="orange"> brandingul</span>
          </span>
        </div>

        <div className="text-container2">
          Nu orice afacere este un brand, cum sunteti tentati sa credem. Brandul reprezinta fuziunea dintre mai multe
          elemente care dau nastere produsului sau companiei noastre, fuziune care ne face unici, diferiti,
          recognoscibili. Cand vorbim despre brand, ne putem raporta la doua dimensiuni: dimensiunea reala, oferita de
          caracteristicile brandului (ce este si ce face) dimensiunea perceptiva, legata de felul in care publicul vede
          ce facem, de felul in care suntem perceputi.
        </div>
      </div>
    </div>
  );
};

export default Component2;
