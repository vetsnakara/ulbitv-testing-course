import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState();
  const [toggle, setToggle] = useState(false);
  const [value, setValue] = useState("");

  const onClick = () => setToggle((toggle) => !toggle);

  useEffect(() => {
    setTimeout(() => {
      setData({});
    }, 100);
  }, []);

  return (
    <div>
      <h1>Hello World</h1>
      {toggle && <div data-testid="toggle-elem">toggle</div>}
      {data && <div style={{ color: "red" }}>data</div>}
      <div data-testid="value-elem">{value}</div>
      <button data-testid="toggle-btn" onClick={onClick}>
        Click Me
      </button>
      <input
        onChange={(e) => setValue(e.target.value)}
        className="input"
        type="text"
        placeholder="input value..."
      />
      <hr />
    </div>
  );
}

export default App;
