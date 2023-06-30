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
  options: number[];
}

interface ButtonProps {
  counter: number;
  setter: Dispatch<SetStateAction<number>>;
  value: number;
}

const GlizButton: React.FC<ButtonProps> = ({ value, setter, counter }) => {
  return (
    <>
      <button
        className="m-3"
        onClick={() => {
          setter((counter) => value);
        }}
      >
        {value}
      </button>
    </>
  );
};

// const Glizzy: React.FC<GlizzyProps> = ({
//   title,
//   counter,
//   setter,
//   total,
//   setTotal,
//   operator,
// }) => {
//   return (
//     <>
//       <div className="border-4 m-5 border-indigo-500/100 ...">
//         <h3>
//           {title} {counter}
//         </h3>
//         <div className="card">
//           <button
//             className="m-3"
//             onClick={() => {
//               setter((counter) => 5);
//             }}
//           >
//             5
//           </button>
//           <button
//             className="m-3"
//             onClick={() => {
//               setter((counter) => 10);
//             }}
//           >
//             10
//           </button>
//           <button
//             className="m-3"
//             onClick={() => {
//               setTotal((total) => operator(total, counter));
//               setter((counter) => 0);
//             }}
//           >
//             Add
//           </button>
//         </div>
//       </div>
//     </>
//   );
// };

const Glizzy: React.FC<GlizzyProps> = ({
  title,
  counter,
  setter,
  total,
  setTotal,
  operator,
  options,
}) => {
  return (
    <>
      <div className="border-4 m-5 border-indigo-500/100 ...">
        <h3>
          {title} {counter}
        </h3>
        <div className="card">
          {options.map((option) => (
            <GlizButton
              key={option}
              value={option}
              setter={setter}
              counter={counter}
            />
          ))}
          <button
            className="m-3"
            onClick={() => {
              setTotal((total) => operator(total, counter));
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
  const [div, setDiv] = useState(0);
  const [mul, setMul] = useState(0);
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
          options={[0, 1, 2, 3, 4, 5]}
        />
        <Glizzy
          title="Consumed Glizzy's:"
          counter={sub}
          setter={setSub}
          total={total}
          setTotal={setTotal}
          operator={m.subtracter}
          options={[0, 1, 2, 3, 4, 5]}
        />
        <Glizzy
          title="Glizzy Division:"
          counter={div}
          setter={setDiv}
          total={total}
          setTotal={setTotal}
          operator={m.divider}
          options={[0, 1, 2, 3, 4, 6, 7, 8]}
        />
        <Glizzy
          title="Glizzy Multiplication:"
          counter={mul}
          setter={setMul}
          total={total}
          setTotal={setTotal}
          operator={m.multiplier}
          options={[0, 1, 2, 3, 4, 5]}
        />
      </div>
    </>
  );
}

export default App;
