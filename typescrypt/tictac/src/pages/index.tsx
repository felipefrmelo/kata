import { useState } from "react";
import { Config, Welcome } from "../componets/organism";

export default function Home() {
  const [showOptions, setShowOptions] = useState(false);
  return (
    <>
      {!showOptions ? (
        <Welcome onStart={() => setShowOptions(!showOptions)} />
      ) : (
        <Config />
      )}
    </>
  );
}
