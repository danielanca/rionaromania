import React from "react";
import { Link } from "react-router-dom";

type CardProps = {
  card: {
    Image: string;
    type: string;
    title: string;
    projectLink: string;
  };
  projectCall: (project: string) => void;
};

const Card: React.FC<CardProps> = ({ card, projectCall }) => {
  const goToTop = (_) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    projectCall(card.projectLink);
  };

  return (
    <Link onClick={goToTop} className="p-0" to={`/proiect/${card.projectLink}`}>
      <div className="col-12 p-0  card-container">
        <img src={card.Image} alt={card.title} className="card-img" />
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
