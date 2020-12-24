import React from "react";

const names = [
  [
    "Hep Yek Dü Yek (1-1)",
    "Dü yek         (1-2)",
    "Se Yek         (1-3)",
    "Cihar-ı Yek    (1-4)",
    "Penc-ü Yek     (1-5)",
    "Şeş-ü Yek      (1-6)",
  ],
  [
    "Dü yek         (2-1)",
    "Dü Bara        (2-2)",
    "Seba-i Dü      (2-3)",
    "Cihar-i Dü     (2-4)",
    "Penc i Dü      (2-5)",
    "Şeş-i Dü       (2-6)",
  ],
  [
    "Se Yek         (3-1)",
    "Seba-i Dü      (3-2)",
    "Dü Se          (3-3)",
    "Cihar-ü Se     (3-4)",
    "Penc-ü Se      (3-5)",
    "Şeş-ü Se       (3-6)",
  ],
  [
    "Cihar-ı Yek    (4-1)",
    "Cihar-i Dü     (4-2)",
    "Cihar-ü Se     (4-3)",
    "Dört Cihar     (4-4)",
    "Beş Dört       (4-5)",
    "Şeş Cehar      (4-6)",
  ],
  [
    "Penc-ü Yek     (5-1)",
    "Penc i Dü      (5-2)",
    "Penc-ü Se      (5-3)",
    "Beş Dört       (5-4)",
    "Dü Beş         (5-5)",
    "Şeş Beş        (5-6)",
  ],
  [
    "Şeş-ü Yek      (6-1)",
    "Şeş-i Dü       (6-2)",
    "Şeş-ü Se       (6-3)",
    "Şeş Cehar      (6-4)",
    "Şeş Beş        (6-5)",
    "Dü Şeş         (6-6)",
  ],
];

const DiceNames = (props) => {
  const { Dice1, Dice2 } = props;
  return (
    <div>
      <div>
        <h2>Dice Name: {names[Dice1 - 1][Dice2 - 1]}</h2>
      </div>
    </div>
  );
};

export default DiceNames;
