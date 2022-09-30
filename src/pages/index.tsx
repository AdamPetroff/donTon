import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import TonConnector from "../components/Ton-Connector";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className="App">
      <h1>Ton Sample TWA</h1>
      <TonConnector />
    </div>
  );
};

export default Home;
