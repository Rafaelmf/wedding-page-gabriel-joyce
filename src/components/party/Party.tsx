import { Suspense, lazy } from "react";
import "./Party.scss";
import TimerCountDown from "./TimerCountDown";

import { AiOutlineFacebook, AiOutlineInstagram } from "react-icons/ai";
// import { FaMapMarkedAlt } from "react-icons/fa";
import { Divider } from "antd";
import Link from "antd/lib/typography/Link";

import Lottie from "react-lottie";
import mapData from "./map.json";

// Lazy load the map component
const MapComponent = lazy(() => import("./MapComponent"));

const index = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <section style={{ backgroundColor: "#f2f2f2" }}>
      <div className="SvgDivider">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className={"shapeFill"}
          ></path>
        </svg>
      </div>

      <div className="party">
        <div className="partyInternal">
          <div style={{ textAlign: "center" }}>
            <h1 className="titleParty">Quando ?</h1>
            <p style={{ marginBottom: "0" }}>DATA DO CASAMENTO</p>
            <p>HORÁRIO</p>

            <div className="timer">
              <TimerCountDown />
            </div>
          </div>

          <Divider type="vertical" />

          <div>
            <h1 className="titleParty">
              <Lottie
                height={90}
                width={110}
                options={{ ...defaultOptions, animationData: mapData }}
              />
              Onde ?
            </h1>

            <div className="locationContainer">
              <div className="avatarSpan">
                <a target="_blank" href="#">
                  ATUALIZAR LOCAL DO CASAMENTO
                </a>
                <Link target="_blank" href="#">
                  <AiOutlineFacebook size={50} className="icons" />
                </Link>
                <Link target="_blank" href="#">
                  <AiOutlineInstagram size={50} className="icons" />
                </Link>
              </div>

              <div className="mapCenter">
                <Suspense fallback={<div>Loading map...</div>}>
                  <MapComponent />
                </Suspense>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
