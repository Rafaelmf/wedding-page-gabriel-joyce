import React from "react";
import { Helmet } from "react-helmet-async";
import { ConfigProvider } from "antd";
import "./styles/Home.scss";

import PartySection from "./components/party/Party";
import GiftsSection from "./components/gifts/Gifts";
import CityLocations from "./components/city/City";
import Quiz from "./components/quiz/Quiz";
import OurStory from "./components/ourStory/OurStory";
import Cover from "./components/cover/Cover";

const App: React.FC = () => {
  return (
    <ConfigProvider>
      <div className={"container"}>
        <Helmet>
          <title>Gabriel e Joyce</title>
          <meta
            name="description"
            content="Página de convite do casamento de Gabriel e Joyce"
          />
        </Helmet>

        <main className="main">
          <Cover />

          <Quiz />

          <OurStory />

          <PartySection />

          <div
            style={{ backgroundImage: "url(./layered-waves-haikei-top.svg)" }}
            className="spacer"
          />

          <GiftsSection />

          <div
            style={{ backgroundImage: "url(./layered-waves-haikei.svg)" }}
            className="spacer"
          />

          <CityLocations />
        </main>

        <footer className={"footer"}>
          © por Gabriel e Joyce
          <span className={"logo"}>
            <img src="./rings.ico" alt="rings" width={42} height={42} />
          </span>
        </footer>
      </div>
    </ConfigProvider>
  );
};

export default App;
