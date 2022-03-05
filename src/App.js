import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const [showing, setShowing] = useState(false);

  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  const onShow = () => setShowing((prev) => !prev);

  function Hello() {
    useEffect(() => {
      console.log("hi :)");
      return () => console.log("bye :(");
    }, []);
    return <h1>Hello</h1>;
  }

  useEffect(() => {
    console.log("I run only once.");
  }, []);

  useEffect(() => {
    if (counter !== "" && keyword.length > 0) {
      console.log("I run when 'counter' changes");
    }
  }, [counter]);

  useEffect(() => {
    if (keyword !== "" && keyword.length > 0) {
      console.log("I run when 'keyword' changes");
    }
  }, [keyword]);

  useEffect(() => {
    console.log("I run when 'keyword' & 'counter' changes");
  }, [keyword, counter]);

  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here..."
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
      <hr />
      <button onClick={onShow}>{showing ? "Hide" : "Show"}</button>
      {showing ? <Hello /> : null}
    </div>
  );
}

export default App;
