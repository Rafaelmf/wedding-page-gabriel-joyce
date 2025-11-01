import dynamic from "next/dynamic";
import styles from "./Party.module.scss";
import TimerCountDown from "./TimerCountDown";

import {
  AiOutlineFacebook,
  AiOutlineInstagram,
} from "react-icons/ai";
import { FaMapMarkedAlt } from "react-icons/fa";
import { Divider, Avatar } from "antd";
import Link from "antd/lib/typography/Link";

import Lottie from "react-lottie";
import * as map from "./map.json";

const index = () => {
  const DynamicMapWithNoSSR = dynamic(
    () => import("./MapComponent"), // replace '@components/map' with your component's location
    { ssr: false } // This line is important. It's what prevents server-side render
  );
  const defaultOptions = {
    loop: true,
    autoplay: true,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <section style={{ backgroundColor: "#f2f2f2" }}>
      <div className={styles.SvgDivider}>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className={styles.shapeFill}
          ></path>
        </svg>
      </div>

      <div className={styles.party}>
        <div className={styles.partyInternal}>
          <div style={{ textAlign: "center" }}>
            <h1 className={styles.titleParty}>Quando ?</h1>
            <p style={{ marginBottom: "0" }}>DATA DO CASAMENTO</p>
            <p>HORÁRIO</p>

            <div className={styles.timer}>
              <TimerCountDown />
            </div>
          </div>

          <Divider type="vertical" />

          <div>
            <h1 className={styles.titleParty}>
              <Lottie
                height={90}
                width={110}
                options={{ ...defaultOptions, animationData: map }}
              />
              Onde ?
            </h1>

            <div className={styles.locationContainer}>
              <div className={styles.avatarSpan}>
                <a
                  target="_blank"
                  href="#"
                >
                  ATUALIZAR LOCAL DO CASAMENTO
                </a>
                <Link
                  target="_blank"
                  href="#"
                >
                  <AiOutlineFacebook size={50} className={styles.icons} />
                </Link>
                <Link
                  target="_blank"
                  href="#"
                >
                  <AiOutlineInstagram size={50} className={styles.icons} />
                </Link>
              </div>

              <div className={styles.mapCenter}>
                <DynamicMapWithNoSSR />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
