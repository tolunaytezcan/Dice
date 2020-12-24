import React, { Component } from "react";
import Dice from "./Dice";
import DiceNames from "./DiceNames";
import "./Dice.css";

const options = ["1", "2", "3", "4", "5", "6"];

const getRandomElFromArr = (arr) => {
  const randomIndex = Math.floor(Math.random() * arr.length);
  const randomItem = arr[randomIndex];
  return randomItem;
};

class DiceRoll extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Dice1: options[5],
      Dice2: options[5],
      diceHistory1: [],
      diceHistory2: [],
      rolling: false,
      equality: "Doubles",
    };
  }

  roll = () => {
    const random1 = getRandomElFromArr(options);
    const random2 = getRandomElFromArr(options);
    let double = true;

    if (random1 === random2) {
      double = true;
    } else double = false;

    this.setState({
      rolling: true,
    });
    setTimeout(() => {
      this.setState({
        Dice1: random1,
        Dice2: random2,
        diceHistory1: [...this.state.diceHistory1, random1],
        diceHistory2: [...this.state.diceHistory2, random2],
        rolling: false,
        equality: double ? "Doubles" : "Not equal",
      });
    }, 400);
  };

  clear = () => {
    this.setState({
      diceHistory1: [],
      diceHistory2: [],
    });
  };

  render() {
    const {
      Dice1,
      Dice2,
      rolling,
      diceHistory1,
      diceHistory2,
      equality,
    } = this.state;
    return (
      <div>
        <h1 className="main">Dice Roller</h1>
        <Dice Dice1={Dice1} rolling={rolling} />
        <br />
        <Dice Dice2={Dice2} rolling={rolling} />
        <button onClick={this.roll}>Roll Dice</button>
        <button onClick={this.clear}>Clear</button>
        <div className="main">
          <DiceNames Dice1={Dice1} Dice2={Dice2} />
          <h2>
            Dice equality: <u>{equality}</u>
          </h2>
          <h2>{`Dice 1 history: ${diceHistory1}`}</h2>
          <h2>{`Dice 2 history: ${diceHistory2}`}</h2>
        </div>
      </div>
    );
  }
}
export default DiceRoll;
