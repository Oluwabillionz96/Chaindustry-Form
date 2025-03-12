import Inputs, { Label } from "../Inputs/Inputs";
import uploadIcon from "../../assets/icon-upload.svg";
import { useRef } from "react";
import { Link } from "react-router-dom";

const Multiple = ({
  onChange1,
  onChange2,
  onChange3,
  onChange4,
  check1,
  check2,
  check3,
  check4,
  name,
  inputName,
}) => {
  return (
    <fieldset className="flexs jcs spc">
      <legend>{name}</legend>
      <div className="flexs radios">
        <Inputs
          type={"radio"}
          name={inputName}
          id={"isNovice"}
          value={"Novice"}
          onChange={onChange1}
          check={check1}
        />
        <Label id={"isNovice"} name={"Novice"} />
      </div>
      <div className="flexs radios">
        <Inputs
          type={"radio"}
          name={inputName}
          id={"isBasic"}
          value={"Basic Level"}
          onChange={onChange2}
          check={check2}
        />
        <Label id={"isBasic"} name={"Basic"} />
      </div>
      <div className="flexs radios">
        <Inputs
          type={"radio"}
          name={inputName}
          id={"isMid"}
          value={"Mid-level"}
          onChange={onChange3}
          check={check3}
        />
        <Label id={"isMid"} name={"Mid"} />
      </div>
      <div className="flexs radios">
        <Inputs
          type={"radio"}
          name={inputName}
          id={"isExpert"}
          value={"Expert"}
          onChange={onChange4}
          check={check4}
        />
        <Label id={"isExpert"} name={"Expert"} />
      </div>
    </fieldset>
  );
};

const TwoOptions = ({
  onChange1,
  onChange2,
  check1,
  check2,
  name,
  inputName,
  id1,
  id2,
  value1,
  value2,
  paddingTop,
  height,
}) => {
  return (
    <fieldset
      className="flexs jcs"
      style={{ paddingTop: paddingTop, height: height }}
    >
      <legend>{name}</legend>
      <div className="flexs radios">
        <Inputs
          type={"radio"}
          name={inputName}
          id={id1}
          value={value1}
          onChange={onChange1}
          check={check1}
        />
        <Label id={id1} name={value1} />
      </div>
      <div className="flexs radios">
        <Inputs
          type={"radio"}
          name={inputName}
          id={id2}
          value={value2}
          onChange={onChange2}
          check={check2}
        />
        <Label id={id2} name={value2} />
      </div>
    </fieldset>
  );
};

const masterClasses = [
  { name: "Blogging and SEO", id: "Blogging-and-SEO" },
  { name: "Data Ananlysis", id: "Data-Ananlysis" },
  { name: "Video Editing", id: "Video-Editing" },
  {
    name: "BlockChain and Web Developemnt",
    id: "BlockChain-and-Web-Developemnt",
  },
  { name: "Trading and Investment", id: "Trading-and-Investment" },
  { name: "UI/UX and Graphics Design", id: "UI/UX-and-Graphics-Design" },
  { name: "Web2/Web3 Digital Marketing", id: "Web2/Web3-Digital Marketing" },
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
      <div className="flexs col ais ">
        <Label id={"email"} name={"Email"} />
        <Inputs
          type={"email"}
          name={"email"}
          id={"email"}
          placeholder={"example@gmail.com"}
          onChange={onChange1}
          value={value1}
          handleKeypress={press1}
          // focus
        />
        <p className="emp" ref={reff1}></p>
      </div>
      <div className="flexs col ais">
        <Label id={"name"} name={"Full Name"} />
        <Inputs
          type={"text"}
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
      <TwoOptions
        onChange1={onChange1}
        onChange2={onChange2}
        check1={check}
        check2={check2}
        name={"Do You Have A Phone?"}
        inputName={"phone"}
        id1={"YesPhone"}
        id2={"NoPhone"}
        value1={"Yes"}
        value2={"No"}
      />
      <div className="flexs col ais">
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
          focus
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
      <div className="flexs col ais ">
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
          focus
        />
        <p className="emp" ref={reff1}></p>
      </div>
      <div className="flexs col ais">
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
      <TwoOptions
        name={"Do You Have A Laptop?"}
        inputName={"laptop"}
        id1={"YesLaptop"}
        id2={"NoLaptop"}
        value1={"Yes"}
        value2={"No"}
        onChange1={onChange1}
        onChange2={onChange2}
        check1={check1}
        check2={check2}
      />
      <Multiple
        onChange1={onChange3}
        onChange2={onChange4}
        onChange3={onChange5}
        onChange4={onChange6}
        check1={check3}
        check2={check4}
        check3={check5}
        check4={check6}
        name={"Computer Literacy Level"}
        inputName={"Computer-Literacy"}
      />
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
      <Multiple
        onChange1={onChange1}
        onChange2={onChange2}
        onChange3={onChange3}
        onChange4={onChange4}
        check1={check1}
        check2={check2}
        check3={check3}
        check4={check4}
        name={"Social Media and Internet activities exposure level"}
        inputName={"Social-Media-Exposure-Level"}
      />
      <TwoOptions
        name={"How do you prefer to undergo this traning?"}
        inputName={"site-prefrence"}
        id1={"onsite"}
        id2={"online"}
        value1={"Onsite"}
        value2={"Online"}
        onChange1={onChange5}
        onChange2={onChange6}
        check1={check5}
        check2={check6}
      />
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
    <fieldset style={{ height: "fit-content" }}>
      <legend>What Master classes would you like to attend</legend>
      <ul style={{ listStyle: "none", flex: 1 }}>
        {masterClasses.map((classes) => {
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
      <p className="emp checker" ref={reff}></p>
    </fieldset>
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
  reff,
  click,
}) {
  const fileUpload = useRef(null);
  function handleClick() {
    if (fileUpload.current) {
      fileUpload.current.click();
    }
  }

  return (
    <>
      <TwoOptions
        name={
          "Are you willing to pay the tuition fee of $200 when you start earning during and after your training?"
        }
        inputName={"pay$200?"}
        id1={"Yespay"}
        id2={"NoPay"}
        value1={"Yes"}
        value2={"No"}
        onChange1={onChange1}
        onChange2={onChange2}
        check1={check1}
        check2={check2}
        paddingTop={"0.5rem"}
      />
      <div className="flexs col ais" style={{ marginTop: "0.4rem" }}>
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
        <div className="upload" style={{ position: "relative" }}>
          <div className={value1 ? "uploaded-image" : "upload-icon"}>
            {loader ? (
              "Uploading..."
            ) : (
              <>
                {value1 ? (
                  <a href={value1} target={value1 && "blank"}>
                    <img src={value1} alt="uploaded image" />
                  </a>
                ) : (
                  <img
                    src={uploadIcon}
                    alt="upload icon"
                    onClick={() => {
                      handleClick();
                      click();
                    }}
                  />
                )}
              </>
            )}
          </div>
          <p className="drag-and-drop" style={{ display: value1 && "none" }}>
            Drag and drop or click to upload
          </p>
        </div>
        <Link to="/account"> What is a ChaindustryAccount?</Link>
        <p className="emp" ref={reff}></p>
      </div>
    </>
  );
}

export function SubmitOrClear({ onclick2 }) {
  return (
    <>
      <Inputs type="submit" />
      <button id="clear" onClick={onclick2}>
        Clear Form
      </button>
    </>
  );
}
