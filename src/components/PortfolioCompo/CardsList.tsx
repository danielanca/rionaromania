import React from "react";

import { CardsData } from "./typings";
import Card from "./Card";
import styles from "./CardsList.module.scss";

interface Props {
  cards: any;
  projectUp: (value: string) => void;
}
export default function CardsList({ cards, projectUp }: Props) {
  console.log("CardsList:", cards);
  return (
    <>
      <div className={styles.titleHead}>
        <h2>{"Portofoliu"}</h2>
      </div>
      <div className={styles.portfolioWrapper + " row cards-container px-2"}>
        {cards.map((card, index) => (
          <Card key={index} card={card} projectCall={projectUp} />
        ))}
      </div>
    </>
  );
}
