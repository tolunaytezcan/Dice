import React from "react";
import "./DiceStyles.css";
import one from "../1.jpg";
import two from "../2.jpg";
import three from "../3.jpg";
import four from "../4.jpg";
import five from "../5.jpg";
import six from "../6.jpg";

const Dice = (props) => {
  return (
    <div className="Dice-container">
      <div className={`Dice ${props.rolling && "Dice-rotate"}`}>
        <img
          src={one}
          className={
            props.Dice1 === "1" || props.Dice2 === "1"
              ? "Dice-front"
              : "Dice-back"
          }
        />
        <img
          src={two}
          className={
            props.Dice1 === "2" || props.Dice2 === "2"
              ? "Dice-front"
              : "Dice-back"
          }
        />
        <img
          src={three}
          className={
            props.Dice1 === "3" || props.Dice2 === "3"
              ? "Dice-front"
              : "Dice-back"
          }
        />
        <img
          src={four}
          className={
            props.Dice1 === "4" || props.Dice2 === "4"
              ? "Dice-front"
              : "Dice-back"
          }
        />
        <img
          src={five}
          className={
            props.Dice1 === "5" || props.Dice2 === "5"
              ? "Dice-front"
              : "Dice-back"
          }
        />
        <img
          src={six}
          className={
            props.Dice1 === "6" || props.Dice2 === "6"
              ? "Dice-front"
              : "Dice-back"
          }
        />
      </div>
    </div>
  );
};

export default Dice;
