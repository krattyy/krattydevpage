import { useState } from "react";

const Buttons = () => {
  const [number, setCount] = useState(0);

  return (
    <>
      <div>
        <button onClick={() => setCount(number + 1)}>Artır</button>
        <button onClick={() => setCount(number > 0 ? number - 1 : 0)}>
          Azalt
        </button>
        <p>Sayı şu anda {number}</p>
      </div>
    </>
  );
};

export default Buttons;
