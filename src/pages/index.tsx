import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import TonConnector from "../components/Ton-Connector";

const Home: NextPage = () => {
  const router = useRouter();
  const [userId, setUserId] = useState();

  const routerQ = JSON.stringify(router.query);
  useEffect(() => {
    if (router.query.userId) {
      setUserId(userId);
    }
  }, [routerQ]);

  return (
    <div className="App">
      <h1>User id: {userId || "unrecognised"}</h1>
      {/* <TonConnector /> */}
    </div>
  );
};

export default Home;
