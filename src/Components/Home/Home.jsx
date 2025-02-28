import { useState, useRef } from "react";
import logo from "../../assets/logo.svg";
import "./home.css";
import {
  LaptopAndComputerLiteracy,
  EmailAndName,
  PhoneAndPhoneNumber,
  MasterClasses,
  WhatsappAndTelegram,
  SocialMediaExposureAndSite,
  Upload,
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
    classes: [],
    payment: "Yes",
    image: "",
  });
  const [loadinging, setLoading] = useState(false);
  function handleCheck(e, warning) {
    let next = [...userInfo.classes];
    if (next.includes(e.target.value) === false) {
      next = [...next, e.target.value];
      warning.current.style.display = "none";
    } else {
      const index = next.indexOf(e.target.value);
      next.splice(index, 1);
      console.log(index);
    }
    setUserInfo({ ...userInfo, classes: next });
  }
  const hidden1 = useRef(null);
  const hidden2 = useRef(null);
  const hidden3 = useRef(null);
  const hidden4 = useRef(null);
  const hidden5 = useRef(null);
  const hidden6 = useRef(null);
  async function handleFileUpload(event) {
    const file = event.target.files[0];
    if (!file) return;
    setLoading(true);
    if (
      file.type === "image/png" ||
      file.type === "image/jpg" ||
      file.type === "image/jpeg"
    ) {
      const data = new FormData();
      data.append("file", file);
      data.append("upload_preset", "chaindustry_form");
      data.append("cloud_name", "dconfftvp");
      const response = await fetch(
        "https://api.cloudinary.com/v1_1/dconfftvp/image/upload",
        {
          method: "POST",
          body: data,
        }
      );

      const uploadedImageUrl = await response.json();
      setUserInfo({ ...userInfo, image: uploadedImageUrl.url });
      console.log(uploadedImageUrl);
    } else {
      alert("must be a png or jpg image");
      console.log(file.type);
    }
    setLoading(false);
  }
  const inputs = [
    <EmailAndName
      onChange1={(e) => {
        setUserInfo({
          ...userInfo,
          email: changeTo(e),
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
    <MasterClasses
      arr={userInfo.classes}
      onChange={(e) => handleCheck(e, hidden6)}
      reff={hidden6}
    />,
    <Upload
      loader={loadinging}
      check1={userInfo.payment === "Yes"}
      check2={userInfo.payment == "No"}
      onChange1={(e) => {
        setUserInfo({ ...userInfo, payment: changeTo(e) });
      }}
      onChange2={(e) => {
        setUserInfo({ ...userInfo, payment: changeTo(e) });
      }}
      onChange3={handleFileUpload}
      value1={userInfo.image}
    />,
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
    [userInfo.classes, hidden6],
  ];

  return (
    <main>
      <div>
        <img src={logo} alt="Chaindustry academy's logo" className="logo" />
      </div>
      <h1>Your Web3 With Chaindustry Academy Journey begins here</h1>
      <p className="details">
        Chaindustry Academy is making transformative learning experiences
        accessible for everyone! Note that the Learn and Earn from Web3 training
        with Chaindustry is a three to six months intensive training available
        for only students that are willing to take the course onsite and online.
        This opportunity is free and available for all to learn and pay when
        they start earning.
      </p>
      <form action="" className="flexs col">
        <div className="flexs col input-container" style={{ gap: "1.5rem" }}>
          {inputs[next]}
        </div>
        <div className="flexs" style={{ gap: "2rem" }}>
          <div className="btn-contain flexs">
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
        </div>
      </form>
      <Absolute />
    </main>
  );
};

export default Home;
