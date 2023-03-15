import React from "react";
import styles from "./Component.module.scss";
import parse from "html-react-parser";

import eclipse from "./Ellipse 3.svg";

const Component = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <img src={eclipse} alt="eclipse" />
      </div>

      <div className={styles.titleContainer}>
        <span>
          Cat este de important un <span className="orange"> branding</span>
        </span>
      </div>

      <div className={styles.textContainer}>
        <p>
          {parse(`
           <strong>Brandingul</strong> e cea mai bună strategie de a atrage talente și de a nu mai pierde altele <br> <strong>Din perspectiva noastră</strong>, o
          strategie de brand oferă motivație și direcție angajaților, care vor ști care sunt obiectivele organizației și
          ce au de făcut pentru a ajuta, fiecare din perspectiva jobului său. <br> <br> De asemenea, întâlnim din ce în ce mai des
          solicitări de strategii de employer branding menite să atragă talente și să rețină angajații existenți. Un
          branding bun transmite o poveste clară, iar poveștile simple și autentice, care transmit emoție sunt apreciate
          atât de către audiența țintă (clienți/parteneri de business/angajați/potențiali angajați) cât și de investitori.
          Companiile care au povești bine spuse reușesc să facă apel la emoții, ceea ce angreneză vânzările. Oamenii vor
          să lucreze pentru companii care fac lucruri mărețe, iar lucrurile sunt mărețe doar dacă pot fi înțelese și de
          alte persoane decât cele care le-au gândit.<br><br> Angajații își doresc să se simtă bine practicându-și jobul, mai ales
          că petrec atât de mult timp acolo. Nimeni nu își dorește să ”cumpere” ceva ce nu înțelege. Este
          responsabilitatea companiilor să le ”vândă” o poveste care să îi entuziasmeze. Iar asta se aplică atât atunci
          când ne adresăm potențialilor angajați sau clienți. Și nu o zicem doar noi, ci și cercetătorii. Știința
          comportamentului uman modern a ajuns la concluzia că suntem niște creaturi instinctive și emoționale. <br><br> <strong>Știm</strong>, ne
          dorim cu toții să fim și raționali, de aceea ne creeăm liste pro-contra, cerem recomandări prietenilor, citim
          recenzii, însă la finalul zilei, deciziile noastre, inconștient, sunt luate în funcție de cum ne simțim și se
          leagă de emoțiile pe care le-am avut atunci când am luat decizia. Un brand care își construiește povestea
          apelând la emoțiile clienților va câștiga întotdeauna în fața competitorilor care vorbesc doar despre
          caracteristici și beneficii. <br> <br>Nu spunem nici că un brand puternic este o cheie universală care va rezolva orice
          problemă legată de resursa umană. Vor fi în continuare provocări specifice HR-ului precum compensații și
          beneficii, proceduri de promovare, atragere și menținere a talentelor. Însă ajută mult să poți vorbi cu
          potențialii angajați având în spate un brand autentic, cuo poveste bine spusă, diferențe relevante și care știe
          să comunice coerent cu angajații, cu clienții și cu partenerii de afaceri.
          `)}
        </p>
      </div>
    </div>
  );
};

export default Component;
