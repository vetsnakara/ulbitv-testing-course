import { useState } from "react";

export const HelloWorldPage = () => {
  const [value, setValue] = useState("");
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <input
        id="search"
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        id="toggle"
        onClick={() => value === "hello" && setVisible((visible) => !visible)}
      >
        HELLO WORLD
      </button>
      {visible && <h1 id="hello">HELLO WORLD</h1>}
    </div>
  );
};
