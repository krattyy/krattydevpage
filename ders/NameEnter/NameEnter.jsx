import { useState } from "react";

const NameEnter = () => {
  const [name, setName] = useState(null);
  const [data, setData] = useState(null);
  console.log(name, "Tuna");

  const targetFunc = (e) => {
    console.log(e, "e");
    setName(e.target.value);
  };

  const clickFunc = () => {
    setData(name);
  };
  return (
    <>
      <input type="text" onChange={targetFunc} />
      <button onClick={clickFunc}>Tıkla</button>
      <div>
        <p>Girdiğin isim : {data}</p>
      </div>
    </>
  );
};

export default NameEnter;
