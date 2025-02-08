import { useState } from "react";
import logo from "../../assets/logo.svg";
import patternBottom from "../../assets/pattern-squiggly-line-bottom.svg";
import patternTop from "../../assets/pattern-squiggly-line-Top.svg";
import Lines from "../../assets/pattern-lines.svg";
import circle from "../../assets/pattern-circle.svg";
import Inputs, { Label } from "../Inputs/Inputs";
import "./home.css";
import { First, Second } from "../InputFields/InputFields";
const inputs = [<First />, <Second />];

const Home = () => {
  let next, setNext;
  [next, setNext] = useState(0);

  return (
    <main>
      <div>
        <img src={logo} alt="Chaindustry academy's logo" className="logo" />
      </div>
      <h1>Your Web3 With Chaindustry Academy Journey begins here</h1>
      <p className="details">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,quas.
        Perferendis earum corrupti eaque. Enim laborum quia iste, ea aspernatur
        aut, voluptatum, velit reiciendis repellendus earum dolorem libero
      </p>
      <form action="">
        <div className="flexs col input-container" style={{ gap: "1.5rem" }}>
          {inputs[next]}
        </div>
        <div className="flexs" style={{ gap: "2rem" }}>
          <button
            onClick={(e) => {
              e.preventDefault();
              setNext(next - 1);
            }}
          >
            <i className="fa fa-arrow-left" aria-hidden="true"></i>
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              setNext(next + 1);
            }}
          >
            <i className="fa fa-arrow-right" aria-hidden="true"></i>
          </button>
        </div>
      </form>
      <div className="abs squiggly-bottom">
        <img src={patternBottom} alt="squiggly pattern bottom" />
      </div>
      <div className="abs squiggly-top">
        <img src={patternTop} alt="squiggly pattern top" />
      </div>
      <div className="abs lines">
        <img src={Lines} alt="lines" />
      </div>
      <div className="abs circle-top">
        <img src={circle} alt="circular pattern" />
      </div>
      <div className="abs circle-mid">
        <img src={circle} alt="circular pattern" />
      </div>
    </main>
  );
};

export default Home;
