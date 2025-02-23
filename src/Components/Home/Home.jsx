import { useState, useRef, use } from "react";
import logo from "../../assets/logo.svg";
import "./home.css";
import {
  EmailAndName,
  Fifth,
  Fourth,
  Last,
  PhoneAndPhoneNumber,
  Sixth,
  Third,
} from "../InputFields/InputFields";
import Absolute from "../Absolutes/Absolute";
import { move } from "../Movements/movement";

const Home = () => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    phone: true,
    phoneNumber: 0,
  });
  const hidden1 = useRef(null);
  const hidden2 = useRef(null);
  const inputs = [
    <EmailAndName
      onChange1={(e) => {
        setUserInfo({
          ...userInfo,
          email: e.target.value,
        });
      }}
      value1={userInfo.email}
      onChange2={(e) => {
        setUserInfo({
          ...userInfo,
          name: e.target.value,
        });
      }}
      value2={userInfo.name}
      reff1={hidden1}
      reff2={hidden2}
      press1={() => {
        hidden1.current.style.display = "none";
      }}
      press2={() => {
        hidden2.current.style.display = "none";
      }}
    />,
    <PhoneAndPhoneNumber
      check={userInfo.phone}
      onChange1={(e) => {
        setUserInfo({ ...userInfo, phone: false });
        console.log(e.target.value);
      }}
      onChange2={(e) => {
        setUserInfo({ ...userInfo, phone: false });
        console.log(e.target.value);
      }}
    />,
    <Third />,
    <Fourth />,
    <Fifth />,
    <Sixth />,
    <Last />,
  ];
  const [next, setNext] = useState(0);
  const isEqual = next === inputs.length - 1;
  const lesser = next === 0;

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
            disabled={lesser}
          >
            <i className="fa fa-arrow-left" aria-hidden="true"></i>
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              move[0](hidden1, hidden2, userInfo.email, userInfo.name) &&
                setNext((next) => next + 1);
              console.log(userInfo);
            }}
            disabled={isEqual}
          >
            <i className="fa fa-arrow-right" aria-hidden="true"></i>
          </button>
        </div>
      </form>
      <Absolute />
    </main>
  );
};

export default Home;
