import React, { useEffect, useRef, useState } from "react";

import images from "../data/images";

import styles from "./../components/PhotoGalleryComponent.module.scss";

import { photoGallery } from "../data/arrays";

interface IProps {
  setShowPhoto: (showPhoto: boolean) => void;
}

const PhotoGalleryComponent: React.FC<IProps> = ({ setShowPhoto }) => {
  const [currentOpenPhoto, setCurrentOpenPhoto] = useState<string>("");
  const [showOpenPhoto, setShowOpenPhoto] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    setCurrentOpenPhoto(photoGallery[currentIndex]);
  }, [currentIndex]);

  const previousPhotoHandler = () => {
    currentIndex !== 0 ? setCurrentIndex(currentIndex - 1) : setCurrentIndex(photoGallery.length - 1);
  };

  const nextPhotoHandler = () => {
    currentIndex !== photoGallery.length - 1 ? setCurrentIndex(currentIndex + 1) : setCurrentIndex(0);
  };

  const openPhotoHandler = (photo: string, index: number) => {
    setCurrentOpenPhoto(photo);
    setCurrentIndex(index);
    setShowOpenPhoto(true);
  };
  const closePhotoHandler = () => {
    setShowOpenPhoto(false);
  };
  return (
    <>
      {showOpenPhoto && (
        <>
          <div onClick={closePhotoHandler} className={styles.backdropBackground}></div>
          <div className={styles.openPhotoContainer}>
            <img src={images.gallery.arrowLeft} className={styles.iconClick} onClick={previousPhotoHandler} />
            <img src={currentOpenPhoto} className={styles.openPhoto} onClick={closePhotoHandler} />
            <img src={images.gallery.arrowRight} className={styles.iconClick} onClick={nextPhotoHandler} />
          </div>
        </>
      )}
      <div className={styles.container}>
        <img className={styles.closeImage} src={images.booking.closeButton} onClick={() => setShowPhoto(false)} />
        <span className={styles.title}>{"photoGalleryComponent.title"}</span>
        <div className={styles.photoListContainer}>
          {photoGallery.map((photo, index) => (
            <img className={styles.image} src={photo} key={index} onClick={() => openPhotoHandler(photo, index)} />
          ))}
        </div>
        <button className={styles.closeButton} onClick={() => setShowPhoto(false)}>
          <span className={styles.closeButtonText}>{"photoGalleryComponent.close"}</span>
        </button>
      </div>
    </>
  );
};

export default PhotoGalleryComponent;
