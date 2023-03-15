import React, { useState } from "react";
import images from "../../data/images";
import styles from "./Homepage.module.scss";
import { useParams } from "react-router-dom";
import parse from "html-react-parser";
import OurServices from "../../blocks/OurServices";
import Reviews from "../../slider/Reviews";
import { fakedata } from "../../components/PortfolioCompo/data/fake-data";
import CardsList from "../../components/PortfolioCompo/CardsList";
import { fakeDataObject } from "../../components/PortfolioCompo/data/fake-data";
import { Container, Carousel } from "react-bootstrap";
import InformationWrap from "../../components/MiniComponents/InformationWrap/InformationWrap";
const Homepage = () => {
  const fetchFakeData = async () => {
    return Promise.resolve(fakedata);
  };
  let params = useParams();
  // let projectLink = params.projectName ? params.projectName : null;
  const [projectLink, setProjectLink] = useState(params.projectName ? params.projectName : null);
  // const { isLoading, error, data } = useQuery("fakedata", fetchFakeData);
  const cardsList = fakedata && JSON.parse(fakedata);
  const [activeFilter, setActiveFilter] = useState("");
  console.log("Project link is:", projectLink);

  const closeProject = () => {
    setProjectLink(null);
  };
  const handleSwitchProject = (projectName: string) => {
    setProjectLink(projectName);
  };
  return (
    <>
      {projectLink ? (
        <div className={styles.backdropModal}>
          <div className="container my-5">
            <div className={styles.topModal}>
              <h1 className="project-title">Branding Photonic</h1>
              <img onClick={closeProject} className={styles.closeStyle} src={images.closeIcon} />
            </div>
            <div className="project-container d-flex flex-column">
              <img className="mt-5" src={fakeDataObject[0].Image} alt="photonic hero" />
              <img className="mt-5" src={fakeDataObject[0].Image} alt="photonic hero" />
              <img className="mt-5" src={fakeDataObject[0].Image} alt="photonic hero" />
              <img className="mt-5" src={fakeDataObject[0].Image} alt="photonic hero" />
              <img className="mt-5" src={fakeDataObject[0].Image} alt="photonic hero" />
              <img className="mt-5" src={fakeDataObject[0].Image} alt="photonic hero" />
              <img className="mt-5" src={fakeDataObject[0].Image} alt="photonic hero" />
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      <div className={styles.landingFirst}>
        <div className={styles.elipse} />
        <div className={styles.heroText}>
          <div className={styles.pitchText}>
            <h2>{parse(`Propulseaza-ti`)}</h2>
            <h2>{parse(`afacerea `)}</h2>
            <h2 className={styles.little}>{parse(`la urmatorul `)}</h2>
            <h2 className={styles.little}>{parse(`nivel `)}</h2>
            <div className={styles.socialWrapper}>
              <img src={images.socialIcons.instagram} />
              <img src={images.socialIcons.facebook} />
            </div>
            <div className={styles.actionWrapper}>
              <button className={styles.pricesButton}>{"Preturi"}</button>
              <button className={styles.callNow}>{"Contacteaza-ne acum"}</button>
            </div>
          </div>
        </div>
        <div className={styles.heroMedia}>
          <img className={styles.heroImage} src={images.heroBoy} />
        </div>
      </div>

      <InformationWrap />

      {/* <OurServices /> */}
      <CardsList cards={cardsList} filter={activeFilter} projectUp={handleSwitchProject} />
    </>
  );
};

export default Homepage;
