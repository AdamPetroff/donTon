import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import TonConnector from "../components/Ton-Connector";

const Home: NextPage = () => {
  const router = useRouter();
  const [userId, setUserId] = useState<string>();

  const routerQ = JSON.stringify(router.query);
  useEffect(() => {
    if (router.query.userId) {
      setUserId(String(router.query.userId));
    }
  }, [routerQ]);

  return <div className="App">{<TonConnector userId={userId || ""} />}</div>;
};

export default Home;
