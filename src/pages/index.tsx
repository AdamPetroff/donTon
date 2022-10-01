import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import TonConnector from "../components/Ton-Connector";

const Home: NextPage = () => {
  const router = useRouter();
  const [userId, setUserId] = useState<string | number>();

  const routerQ = JSON.stringify(router.query);
  useEffect(() => {
    if (router.query.userId) {
      setUserId(router.query.userId as string);
    }
  }, [routerQ]);

  return (
    <div className="App">
      <h1>User id: {userId || "unrecognised"}</h1>
      <p>{JSON.stringify(router.query, undefined, 2)}</p>
      <p>
        {typeof document !== "undefined" && JSON.stringify(document, null, 2)}
      </p>
      <span>test</span>
      {/* <TonConnector /> */}
    </div>
  );
};

export default Home;
