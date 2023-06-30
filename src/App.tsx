import { useState } from "react";
import { Dispatch, SetStateAction } from "react";
import "./App.css";
import { Math } from "./helpers";
const m = new Math();

interface GlizzyProps {
  title: string;
  counter: number;
  setter: Dispatch<SetStateAction<number>>;
  total: number;
  setTotal: Dispatch<SetStateAction<number>>;
  operator: (x: number, y: number) => number;
}

const Glizzy: React.FC<GlizzyProps> = ({
  title,
  counter,
  setter,
  total,
  setTotal,
  operator,
}) => {
  return (
    <>
      <div className="border-4 m-5 border-indigo-500/100 ...">
        <h3>
          {title} {counter}
        </h3>
        <div className="card">
          <button
            className="m-3"
            onClick={() => {
              setter((counter) => operator(counter, 5));
            }}
          >
            5
          </button>
          <button
            className="m-3"
            onClick={() => {
              setter((counter) => operator(counter, 10));
            }}
          >
            10
          </button>
          <button
            className="m-3"
            onClick={() => {
              setTotal((total) => total + counter);
              setter((counter) => 0);
            }}
          >
            Add
          </button>
        </div>
      </div>
    </>
  );
};

function App() {
  const [add, setAdd] = useState(0);
  const [sub, setSub] = useState(0);
  const [total, setTotal] = useState(0);
  return (
    <>
      <div className="border-4 p-5 border-indigo-500/100 ...">
        <h3>Glizzy Stash: {total}</h3>
        <Glizzy
          title="Acquired Glizzy's:"
          counter={add}
          setter={setAdd}
          total={total}
          setTotal={setTotal}
          operator={m.adder}
        />
        <Glizzy
          title="Consumed Glizzy's:"
          counter={sub}
          setter={setSub}
          total={total}
          setTotal={setTotal}
          operator={m.subtracter}
        />
      </div>
    </>
  );
}

export default App;
