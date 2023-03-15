import React, { useState } from "react";
import styles from "./OurServices.module.scss";
import GalleryComponent from "./../components/PhotoGallery/GalleryComponent";

const OurServices = () => {
  return (
    <div className={styles.servicesBlock}>
      <GalleryComponent />
      {/* <div className={styles.cardBlock}>
        <h2>Bussines-uri mici</h2>
        <span>Alege din pachetele noastre care ti se potriveste</span>
        <button> Get started</button>
        <img className={styles.arrowStyle} src={images.arrowRiona} />
        <img className={styles.building} src={images.mic} />
      </div> */}
    </div>
  );
};
export default OurServices;
