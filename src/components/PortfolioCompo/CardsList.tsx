import React from "react";

import { CardsData } from "./typings";
import Card from "./Card";
import styles from "./CardsList.module.scss";

interface Props {
  cards: any;
  filter: string;
  projectUp: (value: string) => void;
}
export default function CardsList({ cards, filter, projectUp }: Props) {
  // const filtredCards = filter === "" ? cards : cards.filter((card) => card.type === filter);
  const filtredCards = filter === "" ? cards : cards;
  console.log("CardsList:", cards);
  return (
    <div className={styles.portfolioWrapper + " row cards-container px-2"}>
      {filtredCards.map((card, index) => (
        <Card key={index} card={card} projectCall={projectUp} />
      ))}
    </div>
  );
}
