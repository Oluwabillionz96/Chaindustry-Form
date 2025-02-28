import Inputs, { Label } from "../Inputs/Inputs";
import uploadIcon from "../../assets/icon-upload.svg";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";

const masterClasses = [
  [
    { name: "Blogging and SEO", id: "Blogging-and-SEO" },
    { name: "Data Ananlysis", id: "Data-Ananlysis" },
    { name: "Video Editing", id: "Video-Editing" },
    {
      name: "BlockChain and Web Developemnt",
      id: "BlockChain-and-Web-Developemnt",
    },
  ],
  [
    { name: "Trading and Investment", id: "Trading-and-Investment" },
    { name: "UI/UX and Graphics Design", id: "UI/UX-and-Graphics-Design" },
    { name: "Web2/Web3 Digital Marketing", id: "Web2/Web3-Digital Marketing" },
  ],
];
export const EmailAndName = ({
  onChange1,
  onChange2,
  value1,
  value2,
  reff1,
  reff2,
  press1,
  press2,
}) => {
  return (
    <>
      <div className="flexs col ais " style={{ gap: "0.5rem" }}>
        <Label id={"email"} name={"Email"} />
        <Inputs
          type={"email"}
          name={"email"}
          id={"email"}
          placeholder={"example@gmail.com"}
          onChange={onChange1}
          value={value1}
          handleKeypress={press1}
        />
        <p className="emp" ref={reff1}></p>
      </div>
      <div className="flexs col ais" style={{ gap: "0.5rem" }}>
        <Label id={"name"} name={"Full Name"} />
        <Inputs
          type={"name"}
          name={"name"}
          id={"name"}
          placeholder={"John Doe"}
          onChange={onChange2}
          value={value2}
          handleKeypress={press2}
        />
        <p className="emp" ref={reff2}></p>
      </div>
    </>
  );
};

export function PhoneAndPhoneNumber({
  onChange1,
  onChange2,
  check,
  check2,
  value1,
  onChange3,
  reff,
  press,
}) {
  return (
    <>
      <fieldset className="flexs jcs" style={{ gap: "2rem" }}>
        <legend>Do You Have A Phone?</legend>
        <div className="flexs" style={{ gap: "1rem" }}>
          <Inputs
            type={"radio"}
            name={"Phone?"}
            id={"YesPhone"}
            value={"Yes"}
            onChange={onChange1}
            check={check}
          />
          <Label id={"yesPhone"} name={"Yes"} />
        </div>
        <div className="flexs" style={{ gap: "1rem" }}>
          <Inputs
            type={"radio"}
            name={"Phone?"}
            id={"NoPhone"}
            value={"No"}
            onChange={onChange2}
            check={check2}
          />
          <Label id={"NoPhone"} name={"No"} />
        </div>
      </fieldset>
      <div className="flexs col ais" style={{ gap: "0.5rem" }}>
        <Label id={"number"} name={"Phone Number"} />
        <Inputs
          type={"number"}
          name={"number"}
          id={"number"}
          placeholder={"07012345678"}
          max={11}
          value={value1}
          onChange={onChange3}
          handleKeypress={press}
        />
        <p className="emp" ref={reff}></p>
      </div>
    </>
  );
}

export function WhatsappAndTelegram({
  value1,
  onChange1,
  press1,
  reff1,
  onChange2,
  value2,
  press2,
  reff2,
}) {
  return (
    <>
      <div className="flexs col ais " style={{ gap: "0.5rem" }}>
        <Label id={"whatsapp-number"} name={"Whatsapp Number"} />
        <Inputs
          type={"number"}
          name={"number"}
          id={"whatsapp-number"}
          placeholder={"07012345678"}
          max={11}
          value={value1}
          onChange={onChange1}
          handleKeypress={press1}
        />
        <p className="emp" ref={reff1}></p>
      </div>
      <div className="flexs col ais" style={{ gap: "0.5rem" }}>
        <Label id={"telegram"} name={"Telegram Username"} />
        <Inputs
          type={"text"}
          name={"telegram"}
          id={"telegram"}
          placeholder={"@username"}
          value={value2}
          onChange={onChange2}
          handleKeypress={press2}
        />
        <p className="emp" ref={reff2}></p>
      </div>
    </>
  );
}

export function LaptopAndComputerLiteracy({
  onChange1,
  check1,
  onChange2,
  check2,
  onChange3,
  onChange4,
  onChange5,
  onChange6,
  check3,
  check4,
  check5,
  check6,
}) {
  return (
    <>
      <fieldset className="flexs jcs" style={{ gap: "2rem" }}>
        <legend>Do You Have A Laptop?</legend>
        <div className="flexs" style={{ gap: "1rem" }}>
          <Inputs
            type={"radio"}
            name={"laptop?"}
            id={"YesLaptop"}
            value={"Yes"}
            onChange={onChange1}
            check={check1}
          />
          <Label id={"yesLaptop"} name={"Yes"} />
        </div>
        <div className="flexs" style={{ gap: "1rem" }}>
          <Inputs
            type={"radio"}
            name={"laptop?"}
            id={"NoLaptop"}
            value={"No"}
            onChange={onChange2}
            check={check2}
          />
          <Label id={"NoLaptop"} name={"No"} />
        </div>
      </fieldset>
      <fieldset className="flexs jcs" style={{ gap: "1.5rem" }}>
        <legend>Computer Literacy Level</legend>
        <div className="flexs" style={{ gap: "1rem" }}>
          <Inputs
            type={"radio"}
            name={"Computer-Literacy"}
            id={"isNovice"}
            value={"Novice"}
            onChange={onChange3}
            check={check3}
          />
          <Label id={"isNovice"} name={"Novice"} />
        </div>
        <div className="flexs" style={{ gap: "1rem" }}>
          <Inputs
            type={"radio"}
            name={"Computer-Literacy"}
            id={"isBasic"}
            value={"Basic Level"}
            onChange={onChange4}
            check={check4}
          />
          <Label id={"isBasic"} name={"Basic Level"} />
        </div>
        <div className="flexs" style={{ gap: "1rem" }}>
          <Inputs
            type={"radio"}
            name={"Computer-Literacy"}
            id={"isMid"}
            value={"Mid-level"}
            onChange={onChange5}
            check={check5}
          />
          <Label id={"isMid"} name={"Mid-Level"} />
        </div>
        <div className="flexs" style={{ gap: "1rem" }}>
          <Inputs
            type={"radio"}
            name={"Computer-Literacy"}
            id={"isExpert"}
            value={"Expert"}
            onChange={onChange6}
            check={check6}
          />
          <Label id={"isExpert"} name={"Expert"} />
        </div>
      </fieldset>
    </>
  );
}
export function SocialMediaExposureAndSite({
  onChange1,
  onChange2,
  onChange3,
  onChange4,
  onChange5,
  onChange6,
  check1,
  check2,
  check3,
  check4,
  check5,
  check6,
}) {
  return (
    <>
      <fieldset className="flexs jcs" style={{ gap: "1.5rem" }}>
        <legend>Social Media and Internet activities exposure level</legend>
        <div className="flexs" style={{ gap: "1rem" }}>
          <Inputs
            type={"radio"}
            name={"internet-exposure-level"}
            id={"isNovice"}
            value={"Novice"}
            onChange={onChange1}
            check={check1}
          />
          <Label id={"isNovice"} name={"Novice"} />
        </div>
        <div className="flexs" style={{ gap: "1rem" }}>
          <Inputs
            type={"radio"}
            name={"internet-exposure-level"}
            id={"isBasic"}
            value={"Basic Level"}
            onChange={onChange2}
            check={check2}
          />
          <Label id={"isBasic"} name={"Basic Level"} />
        </div>
        <div className="flexs" style={{ gap: "1rem" }}>
          <Inputs
            type={"radio"}
            name={"internet-exposure-level"}
            id={"isMid"}
            value={"Mid-level"}
            onChange={onChange3}
            check={check3}
          />
          <Label id={"isMid"} name={"Mid-Level"} />
        </div>
        <div className="flexs" style={{ gap: "1rem" }}>
          <Inputs
            type={"radio"}
            name={"internet-exposure-level"}
            id={"isExpert"}
            value={"Expert"}
            onChange={onChange4}
            check={check4}
          />
          <Label id={"isExpert"} name={"Expert"} />
        </div>
      </fieldset>
      <fieldset className="flexs jcs" style={{ gap: "2rem" }}>
        <legend>How do you prefer to undergo this traning?</legend>
        <div className="flexs" style={{ gap: "1rem" }}>
          <Inputs
            type={"radio"}
            name={"site-prefrence"}
            id={"onsite"}
            value={"Onsite"}
            onChange={onChange5}
            check={check5}
          />
          <Label id={"onsite"} name={"Onsite"} />
        </div>
        <div className="flexs" style={{ gap: "1rem" }}>
          <Inputs
            type={"radio"}
            name={"site-prefrence"}
            id={"online"}
            value={"Online"}
            onChange={onChange6}
            check={check6}
          />
          <Label id={"online"} name={"Online"} />
        </div>
      </fieldset>
    </>
  );
}
function CheckBoxes({ name, id, onChange, check, value }) {
  return (
    <div className="flexs jcs checkBox" style={{ gap: "0.5rem" }}>
      <Inputs
        type={"checkbox"}
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        check={check}
      />
      <Label id={id} name={name} />
    </div>
  );
}
export function MasterClasses({ arr, onChange, reff }) {
  return (
    <>
      <div
        className="flexs"
        style={{ justifyContent: "space-around", width: "80%" }}
      >
        <div className="flexs col ais">
          <ul style={{ listStyle: "none" }}>
            {masterClasses[0].map((classes) => {
              return (
                <li key={classes.id}>
                  <CheckBoxes
                    name={classes.name}
                    id={classes.id}
                    value={classes.name}
                    check={arr.includes(classes.name)}
                    onChange={onChange}
                  />
                </li>
              );
            })}
          </ul>
        </div>
        <div className="flexs col ais">
          <ul style={{ listStyle: "none" }}>
            {masterClasses[1].map((classes) => {
              return (
                <li key={classes.id}>
                  <CheckBoxes
                    name={classes.name}
                    id={classes.id}
                    value={classes.name}
                    check={arr.includes(classes.name)}
                    onChange={onChange}
                  />
                </li>
              );
            })}
          </ul>
          <p className="emp" ref={reff}></p>
        </div>
      </div>
    </>
  );
}
export function Upload({
  onChange1,
  onChange2,
  onChange3,
  check1,
  check2,
  value1,
  loader,
}) {
  const fileUpload = useRef(null);
  function handleClick() {
    if (fileUpload.current) {
      fileUpload.current.click();
    }
  }

  function handleFileChange(event) {
    const file = event.target.files[0];
    if (!file) return;
    console.log(file);
  }
  return (
    <>
      <fieldset className="flexs jcs last" style={{ gap: "2rem" }}>
        <legend>
          Are you willing to pay the tuition fee of $200 when you start earning
          during and after your training?
        </legend>
        <div className="flexs" style={{ gap: "1rem" }}>
          <Inputs
            type={"radio"}
            name={"pay$200?"}
            id={"Yespay"}
            value={"Yes"}
            onChange={onChange1}
            check={check1}
          />
          <Label id={"yespay"} name={"Yes"} />
        </div>
        <div className="flexs" style={{ gap: "1rem" }}>
          <Inputs
            type={"radio"}
            name={"pay$200?"}
            id={"NoPay"}
            value={"No"}
            onChange={onChange2}
            check={check2}
          />
          <Label id={"NoPay"} name={"No"} />
        </div>
      </fieldset>
      <div
        className="flexs col ais"
        style={{ gap: "0.5rem", marginTop: "0.4rem" }}
      >
        <Label
          id={"dashboard"}
          name={"upload a screenshot of your Chaindustry account Dashboard"}
        />
        <Inputs
          type={"file"}
          name={"chaindustry-dashBoard"}
          id={"dashboard"}
          ref={fileUpload}
          onChange={onChange3}
        />
        <div
          className="upload"
          onClick={() => {
            handleClick();
          }}
          style={{ position: "relative" }}
        >
          <div className={value1 ? "uploaded-image" : "upload-icon"}>
            {loader ? (
              "Uploading..."
            ) : (
              <a href={value1 ? value1 : null} target={value1 && "blank"}>
                <img
                  src={value1 ? value1 : uploadIcon}
                  alt={value1 ? "uploaded image" : "upload icon"}
                  onClick={(e) => {
                    value1 && e.stopPropagation();
                  }}
                />
              </a>
            )}
          </div>
          <p className="drag-and-drop" style={{ display: value1 && "none" }}>
            Drag and drop or click to upload
          </p>
        </div>
        <Link to="/account"> What is a ChaindustryAccount?</Link>
      </div>
    </>
  );
}
