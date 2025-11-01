import { List } from "antd";
import { AiOutlineLink } from "react-icons/ai";
import styles from "./City.module.scss";
import Lottie from "react-lottie";
import * as recommend from "./recommend.json";

const accommodationList = [
  {
    title: "Exemplo do Hotel 1",
    description: "ATUALIZAR: Descrição do hotel próximo ao local da cerimônia.",
    price: 4,
  },
  {
    title: "Exemplo do Hotel 2",
    description: "ATUALIZAR: Descrição do hotel próximo ao local da cerimônia.",
    price: 4,
  },
  {
    title: "Exemplo do Hotel 3",
    description: "ATUALIZAR: Descrição do hotel próximo ao local da cerimônia.",
    price: 4,
  },
];

const beauty = [
  {
    title: "ATUALIZAR: Nome do Salão",
    description:
      "ATUALIZAR: Espaço de beleza com serviços completos para o grande dia.",
    price: 4,
  },
];

const foodList = [
  {
    title: "Restaurante Exemplo 1",
    description:
      "ATUALIZAR: Descrição do restaurante recomendado para os convidados.",
    link: "#",
    price: 4,
  },
  {
    title: "Restaurante Exemplo 2",
    description:
      "ATUALIZAR: Descrição do restaurante recomendado para os convidados.",
    link: "#",
    price: 3,
  },
  {
    title: "Restaurante Exemplo 3",
    description:
      "ATUALIZAR: Descrição do restaurante recomendado para os convidados.",
    link: "#",
    price: 4,
  },
];

const drinkList = [
  {
    title: "Exemplo Café 1",
    description:
      "Descriçao, localizaçao e especialidades do café recomendado para os convidados.",
    link: "#",
    price: 4,
  },
  {
    title: "Exemplo Café 2",
    description:
      "Descriçao, localizaçao e especialidades do café recomendado para os convidados.",
    link: "#",
    price: 4,
  },
  {
    title: "Exemplo Café 3",
    description:
      "Descriçao, localizaçao e especialidades do café recomendado para os convidados.",
    link: "#",
    price: 4,
  },
];

const getListComponent = (list: any) => (
  <div className={styles.placeRecomnd}>
    <List style={{ width: "100%" }} itemLayout="vertical" size="large">
      {list.map((f: any) => (
        <List.Item
          className={styles.listItem}
          onClick={() => {
            if (typeof window === "undefined") return;
            window.open(f.link, "_blank")?.focus();
          }}
        >
          <List.Item.Meta
            title={
              <>
                <span>{f.title}</span>
                <AiOutlineLink style={{ marginLeft: "5px" }} />
              </>
            }
            description={f.description}
          />
        </List.Item>
      ))}
    </List>
  </div>
);

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: recommend,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const index = () => {
  return (
    <>
      <div className={styles.location}>
        <h1 className={styles.cityTitle}>
          <Lottie height={100} width={100} options={defaultOptions} />
          Recomendações do casal
        </h1>

        <div className={styles.locationInternal}>
          <div style={{ borderRadius: "15px" }}>
            <img
              style={{ height: "4em", margin: "0.5em" }}
              src="./svg-icons/hotel-bell.svg"
            ></img>
            <h1 style={{ margin: 0, fontSize: "2em" }}>Hospedagem</h1>
            <>{getListComponent(accommodationList)}</>
          </div>
          <div style={{ borderRadius: "15px" }}>
            <img
              style={{ height: "4em", margin: "0.5em" }}
              src="./svg-icons/hair-dryer.svg"
            ></img>
            <h1 style={{ margin: 0, fontSize: "2em" }}>Salão de Beleza </h1>
            <>{getListComponent(beauty)}</>
          </div>
          <div style={{ borderRadius: "15px" }}>
            <img
              style={{ height: "4em", margin: "0.5em" }}
              src="./svg-icons/restaurant.svg"
            ></img>
            <h1 style={{ margin: 0, fontSize: "2em" }}>Restaurantes</h1>
            <>{getListComponent(foodList)}</>
          </div>
          <div style={{ borderRadius: "15px" }}>
            <img
              style={{ height: "4em", margin: "0.5em" }}
              src="./svg-icons/coffee.svg"
            ></img>
            <h1 style={{ margin: 0, fontSize: "2em" }}>Cafés e padarias</h1>
            <>{getListComponent(drinkList)}</>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
