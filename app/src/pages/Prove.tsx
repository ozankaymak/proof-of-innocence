import { useState } from "react";

import TornadoNote from "../components/TornadoNote";

function Prove() {
  const [proof, setProof] = useState<string>("asd");
  const [cid, setCid] = useState<string>("");

  const saveToIpfs = async () => {
    console.log("saving to ipfs")
    // send request to https://proof-of-innocence.herokuapp.com/ with proof as post body
    const response = await fetch("https://proof-of-innocence.herokuapp.com/", {
      method: "POST",
      body: proof,
    });
    const cid = await response.text();
    setCid(cid);
  }
  
  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">PoI</h1>
      <h2>Step 1. Get past Tornado Cash deposits</h2>
      <p>You can use my goerli deposit note here:<br/> tornado-eth-0.1-5-0xe49f60b5be7853c9d2af9db59eba98a7280f3b8908c339e6452bc0fb1b7e556a604fd9f824961956e4c8b881c5274ce36c11683070c749120e660cd941fd</p>
      <TornadoNote onResult={setProof}/>
      {proof}
      <h2>Step 3. Send your proof to ipfs</h2>
      <button onClick={saveToIpfs}>Save to IPFS</button>
      <p>Proof saved to IPFS with CID: {cid}</p>
    </div>
  );
}

export default Prove;