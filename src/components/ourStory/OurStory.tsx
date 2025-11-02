import React from "react";
import "./OurStory.scss";
import CarouselPhotos from "./Carousel";
import Lottie from "react-lottie";
import animationData from "./love.json";

const OurStory: React.FC = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <section className="ourStory">
      <div className="twoColumn">
        <CarouselPhotos />
        <div className="ourStoryDiv">
          <div className="ourStoryTitleDiv">
            <Lottie height={150} width={100} options={defaultOptions} />
            <h1 className="ourStoryTitle">Nossa história</h1>
          </div>
          <p
            style={{
              textAlign: "center",
              fontSize: "1.2rem",
              lineHeight: "2rem",
            }}
          >
            Apesar de termos muitos amigos em comum desde o começo da graduação,
            o universo nos colocou no caminho um do outro somente em 2018. Nos
            conhecemos, nos apaixonamos e desde então nos impulsionamos a ser a
            melhor versão de nós mesmos. Não poderíamos ter construído uma
            história tão cheia de amor, união e compreensão sem os nossos
            amigos, colegas, mães, pais, irmãos e familiares ao nosso redor.
            Ficamos imensamente felizes em poder contar com a presença dessas
            pessoas no dia mais especial de nossas vidas.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
