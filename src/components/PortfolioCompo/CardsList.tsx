import React from "react";

import { CardsData } from "./typings";
import Card from "./Card";
import styles from "./CardsList.module.scss";

interface Props {
  cards: CardsData[];
  filter: string;
  projectUp: (value: string) => void;
}
export default function CardsList({ cards, filter, projectUp }: Props) {
  const filtredCards = filter === "" ? cards : cards.filter((card) => card.type === filter);

  return (
    <div className={styles.portfolioWrapper + " row cards-container px-2"}>
      {filtredCards.map((card) => (
        <Card key={card.id} card={card} projectCall={projectUp} />
      ))}
    </div>
  );
}
