import { Card } from "antd";
import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import { MdOutlinePets } from "react-icons/md";
import {
  GiBackpack,
  GiBarbecue,
  GiBigDiamondRing,
  GiConversation,
} from "react-icons/gi";
import "./Quiz.scss";

const quizCards = [
  {
    name: "pet",
    descriptionFront: "Qual o nome dos nossos pets?",
    descriptionBack: "ATUALIZAR COM SEUS PETS",
    icon: <MdOutlinePets style={{ fontSize: "3em" }} color={"#f2f2f2"} />,
  },
  {
    name: "hobby",
    descriptionFront: "O que mais gostamos de fazer?",
    descriptionBack: "ATUALIZAR COM SEU HOBBY",
    icon: <GiConversation style={{ fontSize: "3em" }} color={"#f2f2f2"} />,
  },
  {
    name: "proposal",
    descriptionFront: "Onde nós noivamos?",
    descriptionBack: "ATUALIZAR COM LOCAL DO PEDIDO",
    icon: <GiBigDiamondRing style={{ fontSize: "3em" }} color={"#f2f2f2"} />,
  },
  {
    name: "trip",
    descriptionFront: "Qual foi a nossa viagem mais marcante?",
    descriptionBack: "ATUALIZAR COM SUA VIAGEM",
    icon: <GiBackpack style={{ fontSize: "3em" }} color={"#f2f2f2"} />,
  },
  {
    name: "food",
    descriptionFront: "Qual a nossa comida favorita?",
    descriptionBack: "ATUALIZAR COM SUA COMIDA",
    icon: <GiBarbecue style={{ fontSize: "3em" }} color={"#f2f2f2"} />,
  },
];

const Quiz: React.FC = () => {
  const [isFlipped, setIsFlipped] = useState<{ [key: string]: boolean }>({
    pet: false,
  });

  const flipCard = (key: string, flip: boolean) => {
    setIsFlipped(prev => {
      return {
        ...prev,
        [key]: flip,
      };
    });
  };

  return (
    <section className="quizDiv">
      <div className="quizTitleDiv">
        <span className="quizTitleHeading">Quiz sobre o casal</span>
        <span className="quizDescription">Respostas nos cartões</span>
      </div>

      {quizCards.map(card => (
        <div
          key={card.name}
          onMouseEnter={() => flipCard(card.name, true)}
          onMouseLeave={() => flipCard(card.name, false)}
        >
          <ReactCardFlip isFlipped={isFlipped[card.name]}>
            <Card className="quizCard">
              <div className="quizCardBody">
                {card.icon}
                {card.descriptionFront}
              </div>
            </Card>

            <Card className="quizCard backQuizCard">
              <p className="backTxt">{card.descriptionBack}</p>
            </Card>
          </ReactCardFlip>
        </div>
      ))}
    </section>
  );
};

export default Quiz;
