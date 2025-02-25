import { useState, useRef } from "react";
import logo from "../../assets/logo.svg";
import "./home.css";
import {
  LaptopAndComputerLiteracy,
  EmailAndName,
  Last,
  PhoneAndPhoneNumber,
  MasterClasses,
  WhatsappAndTelegram,
  SocialMediaExposureAndSite,
} from "../InputFields/InputFields";
import Absolute from "../Absolutes/Absolute";
import { move } from "../Movements/movement";

function changeTo(e) {
  return e.target.value;
}

const Home = () => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    phone: "Yes",
    phoneNumber: "",
    whatsappNumber: "",
    telegram: "",
    laptop: "Yes",
    computerLiteracyLevel: "Basic Level",
    SocialMediaExposure: "Basic Level",
    site: "Onsite",
  });
  const hidden1 = useRef(null);
  const hidden2 = useRef(null);
  const hidden3 = useRef(null);
  const hidden4 = useRef(null);
  const hidden5 = useRef(null);
  const inputs = [
    <EmailAndName
      onChange1={(e) => {
        setUserInfo({
          ...userInfo,
          email: changeTo(e).toLowerCase(),
        });
      }}
      value1={userInfo.email}
      onChange2={(e) => {
        setUserInfo({
          ...userInfo,
          name: changeTo(e),
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
      reff={hidden3}
      check={userInfo.phone === "Yes"}
      check2={userInfo.phone === "No"}
      onChange1={(e) => {
        setUserInfo({ ...userInfo, phone: changeTo(e) });
      }}
      onChange2={(e) => {
        setUserInfo({ ...userInfo, phone: changeTo(e) });
      }}
      value1={userInfo.phoneNumber}
      onChange3={(e) => {
        setUserInfo({ ...userInfo, phoneNumber: changeTo(e) });
      }}
      press={() => {
        hidden3.current.style.display = "none";
      }}
    />,
    <WhatsappAndTelegram
      reff1={hidden4}
      reff2={hidden5}
      onChange1={(e) => {
        setUserInfo({ ...userInfo, whatsappNumber: changeTo(e) });
      }}
      onChange2={(e) => {
        setUserInfo({ ...userInfo, telegram: changeTo(e) });
      }}
      press1={() => {
        hidden4.current.style.display = "none";
      }}
      press2={() => {
        hidden5.current.style.display = "none";
      }}
      value1={userInfo.whatsappNumber}
      value2={userInfo.telegram}
    />,
    <LaptopAndComputerLiteracy
      check1={userInfo.laptop === "Yes"}
      check2={userInfo.laptop === "No"}
      check3={userInfo.computerLiteracyLevel === "Novice"}
      check4={userInfo.computerLiteracyLevel === "Basic Level"}
      check5={userInfo.computerLiteracyLevel === "Mid-level"}
      check6={userInfo.computerLiteracyLevel === "Expert"}
      onChange1={(e) => {
        setUserInfo({ ...userInfo, laptop: changeTo(e) });
      }}
      onChange2={(e) => {
        setUserInfo({ ...userInfo, laptop: changeTo(e) });
      }}
      onChange3={(e) => {
        setUserInfo({ ...userInfo, computerLiteracyLevel: changeTo(e) });
      }}
      onChange4={(e) => {
        setUserInfo({ ...userInfo, computerLiteracyLevel: changeTo(e) });
      }}
      onChange5={(e) => {
        setUserInfo({ ...userInfo, computerLiteracyLevel: changeTo(e) });
      }}
      onChange6={(e) => {
        setUserInfo({ ...userInfo, computerLiteracyLevel: changeTo(e) });
      }}
    />,
    <SocialMediaExposureAndSite
      check1={userInfo.SocialMediaExposure === "Novice"}
      check2={userInfo.SocialMediaExposure === "Basic Level"}
      check3={userInfo.SocialMediaExposure === "Mid-level"}
      check4={userInfo.SocialMediaExposure === "Expert"}
      check5={userInfo.site === "Onsite"}
      check6={userInfo.site === "Online"}
      onChange1={(e) => {
        setUserInfo({ ...userInfo, SocialMediaExposure: changeTo(e) });
      }}
      onChange2={(e) => {
        setUserInfo({ ...userInfo, SocialMediaExposure: changeTo(e) });
      }}
      onChange3={(e) => {
        setUserInfo({ ...userInfo, SocialMediaExposure: changeTo(e) });
      }}
      onChange4={(e) => {
        setUserInfo({ ...userInfo, SocialMediaExposure: changeTo(e) });
      }}
      onChange5={(e) => {
        setUserInfo({ ...userInfo, site: changeTo(e) });
      }}
      onChange6={(e) => {
        setUserInfo({ ...userInfo, site: changeTo(e) });
      }}
    />,
    <MasterClasses />,
    <Last />,
  ];
  const [next, setNext] = useState(0);
  const isEqual = next === inputs.length - 1;
  const lesser = next === 0;
  const argu = [
    [hidden1, hidden2, userInfo.email, userInfo.name],
    [hidden3, userInfo.phoneNumber],
    [userInfo.whatsappNumber, hidden4, userInfo.telegram, hidden5],
    [],
    [],
  ];

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
              move[next](argu[next]) && setNext((next) => next + 1);
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
