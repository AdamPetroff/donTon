import { useTonhubConnect } from "react-ton-x";
import { useState } from "react";
import { toNano } from "ton";
import { Card } from "./Card";

export function TransferTon() {
  const connect = useTonhubConnect();
  const [txnStatus, setTxnStatus] = useState<string | null>(null);

  const tonAmount = 1;
  const tonRecipient = "";

  return (
    <Card title="Transfer TON">
      <button
        style={{ marginTop: 18 }}
        onClick={async () => {
          setTxnStatus("Txn requested. Check your wallet");

          connect.api
            .requestTransaction({
              to: tonRecipient,
              value: toNano(tonAmount).toString(10),
            })
            .then((stat) => {
              setTxnStatus(stat.type);
            });
        }}
      >
        Transfer
      </button>
      {txnStatus && <div>{txnStatus}</div>}
    </Card>
  );
}
