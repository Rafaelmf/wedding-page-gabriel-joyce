import styles from "./Gifts.module.scss";
import { IoGiftSharp } from "react-icons/io5";
import { Card, Button } from "antd";
import { useState } from "react";
import Lottie from "react-lottie";
import * as animationData from "./gift.json";
import GiftModal from "./GiftModal";

type Gift = {
  name: string;
  imgUrl: string;
  price?: number;
  qrCode: string;
};

const gifts: Gift[] = [
  {
    name: "Cafeteira dupla turbo",
    imgUrl: "./gifts/coffee.jpeg",
    price: 75,
    qrCode: "./qr-codes/qr75.png",
  },
  // {
  //   name: "Controle remoto da discussão",
  //   imgUrl: "./gifts/sanduiche.jpeg",
  //   price: 100,
  //   qrCode: "./qr-codes/qr100.png",
  // },
  {
    name: "Vale-pizza pós-briga",
    imgUrl: "./gifts/pizza.jpg",
    price: 125,
    qrCode: "./qr-codes/qr125.png",
  },
  // {
  //   name: "Curso de paciência para casais",
  //   imgUrl: "./gifts/garden.jpeg",
  //   price: 150,
  //   qrCode: "./qr-codes/qr150.png",
  // },
  {
    name: "Netflix pro casal",
    imgUrl: "./gifts/netflix.png",
    price: 200,
    qrCode: "./qr-codes/qr200.png",
  },
  {
    name: "Kit jantar romântico",
    imgUrl: "./gifts/dinner.jpg",
    price: 300,
    qrCode: "./qr-codes/qr300.png",
  },
  // {
  //   name: "Seguro contra esquecimento de datas importantes",
  //   imgUrl: "./gifts/london-eye.jpeg",
  //   price: 500,
  //   qrCode: "./qr-codes/qr500.png",
  // },
  {
    name: "Travesseiro anti-ronco",
    price: 350,
    imgUrl: "./gifts/pillow.jpg",
    qrCode: "./qr-codes/qr.png",
  },
  {
    name: "Vale férias na praia",
    price: 400,
    imgUrl: "./gifts/beach.jpg",
    qrCode: "./qr-codes/qr.png",
  },
  {
    name: "Bola de cristal",
    price: 250,
    imgUrl: "./gifts/crystalBall.jpg",
    qrCode: "./qr-codes/qr.png",
  },
  {
    name: "Qualquer valor",
    imgUrl: "./gifts/love.png",
    qrCode: "./qr-codes/qr.png",
  },
];

const Gifts = () => {
  const [currGift, setCurrGift] = useState<Gift | null>(null);

  const openModal = (gift: Gift) => {
    setCurrGift(gift);
  };

  const closeModal = () => {
    setCurrGift(null);
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <>
      <section className={styles.gifts}>
        <h1 style={{ color: "#345870", textAlign: "center" }}>
          <Lottie height={110} width={80} options={defaultOptions} />
          {/* <IoGiftSharp className="icon" /> */}
          Lista de Presentes
        </h1>
        <p style={{ textAlign: "center" }}>
          A sua presença é o maior e melhor presente que poderíamos receber.{" "}
          <br />
          Deixamos aqui algumas sugestões de outros presentes, caso você queira
          e possa nos presentear.
          <br />
          <br />
        </p>
        <div className={styles.giftsGrid}>
          {gifts.map(g => (
            <Card
              onClick={() => openModal(g)}
              key={g.name}
              hoverable
              className={styles.giftCard}
              cover={
                <img className={styles.giftImage} alt={g.name} src={g.imgUrl} />
              }
            >
              <div className={styles.cardContent}>
                <p>{g.name}</p>
                {g.price && (
                  <p className={styles.price}>
                    {`R$ ${g.price.toLocaleString("pt-br", { minimumFractionDigits: 0 })}`}
                  </p>
                )}
                <Button
                  type="primary"
                  shape="round"
                  icon={<IoGiftSharp size={18} className="icon" />}
                >
                  Presentear
                </Button>
              </div>
            </Card>
          ))}
        </div>
        <GiftModal gift={currGift} onClose={closeModal} />
      </section>
    </>
  );
};

export default Gifts;
