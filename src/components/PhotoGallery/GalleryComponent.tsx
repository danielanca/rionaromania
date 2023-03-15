import React, { useState } from "react";

import Carousel from "./Carousel";

import styles from "./GalleryComponent.module.scss";
import leftArrow from "./images/leftArrow.svg";
import rightArrow from "./images/rightArrow.svg";

const GalleryComponent = () => {
  const [galleryIndex, setGalleryIndex] = useState<number>(1);

  let limitLoop = 7;

  const internNotifyHandler = (value: number) => {
    if (galleryIndex + value >= limitLoop || galleryIndex + value === 0) return;

    setGalleryIndex(galleryIndex + value);
  };
  const clickHandler = (eventer: string) => {
    switch (eventer) {
      case "EVENT_RIGHTCLICK":
        internNotifyHandler(1);
        break;
      case "EVENT_LEFTCLICK":
        internNotifyHandler(-1);
        break;
    }
  };

  return (
    <>
      <div className={styles.galleryWrapper + " row"}>
        <div className={styles.carouselSection}>
          <div className={styles.innerSection}>
            <div className={styles.buttonComponentEnd}>
              <img
                onClick={() => {
                  clickHandler("EVENT_LEFTCLICK");
                }}
                className={styles.iconClick}
                src={leftArrow}
              />
            </div>
          </div>
          <div className={styles.carouselCompo}>
            <Carousel galleryIndexIn={galleryIndex} onIndexNotification={internNotifyHandler} />
          </div>
          <div className={styles.outerAction}>
            <div className={styles.buttonComponentStart}>
              <img
                onClick={() => {
                  clickHandler("EVENT_RIGHTCLICK");
                }}
                className={styles.iconClick}
                src={rightArrow}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GalleryComponent;
