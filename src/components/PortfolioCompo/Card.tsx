import React from "react";
import { Link } from "react-router-dom";
import styles from "./Card.module.scss";

type CardProps = {
  card: {
    title: string;
    link: string;
    images: string[];
  };
  projectCall: (project: string) => void;
};

const Card: React.FC<CardProps> = ({ card, projectCall }) => {
  const goToTop = (_) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    projectCall(card.link);
  };

  return (
    <Link onClick={goToTop} className="p-0" to={`/proiect/${card.link}`}>
      <div className={styles.cardContainer + " col-12 p-0  card-container"}>
        <img src={card.images[0]} alt={card.title} className="card-img" />
        <h2 className="card-title ">{card.title}</h2>
      </div>
    </Link>
  );
};

export default Card;

{
  /* <Carousel responsiveLayout={reponsiveBreakponts} cols={3} rows={1} gap={10} loop>
              {filtreredCards.map((card: Props) => (
                <Carousel.Item key={card.id}>
                  <Link to={`/projects/${card.title}`}>
                    <img src={card.Image} alt={card.title} className="w-100 h-100 rounded-2" />
                  </Link>
                </Carousel.Item>
              ))}
            </Carousel> */
}
