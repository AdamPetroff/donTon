import type { NextPage } from "next";
import TonConnector from "../components/Ton-Connector";

const Home: NextPage = () => {
  return (
    <div className="App">
      <h1>Ton Sample TWA</h1>
      <TonConnector />
    </div>
  );
};

export default Home;
