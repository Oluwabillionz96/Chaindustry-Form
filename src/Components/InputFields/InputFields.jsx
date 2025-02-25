import Inputs, { Label } from "../Inputs/Inputs";
import uploadIcon from "../../assets/icon-upload.svg";
import { useRef, useState } from "react";

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
function CheckBoxes({ name, id }) {
  return (
    <div className="flexs jcs checkBox" style={{ gap: "0.5rem" }}>
      <Inputs type={"checkbox"} name={name} id={id} value={name} />
      <Label id={id} name={name} />
    </div>
  );
}
export function MasterClasses() {
  return (
    <>
      <div
        className="flexs"
        style={{ justifyContent: "space-around", width: "80%" }}
      >
        <div className="flexs col ais">
          <CheckBoxes name={"Blogging and SEO"} id={"Blogging-and-SEO"} />
          <CheckBoxes name={"Data Ananlysis"} id={"Data-Ananlysis"} />
          <CheckBoxes name={"Video Editing"} id={"Video Editing"} />
          <CheckBoxes
            name={"BlockChain and Web Developemnt"}
            id={"BlockChain-and-Web-Developemnt"}
          />
        </div>
        <div className="flexs col ais">
          <CheckBoxes
            name={"Trading and Investment"}
            id={"Trading-and-Investment"}
          />
          <CheckBoxes
            name={"Web2/Web3 Digital Marketing"}
            id={"Web2/Web3-Digital Marketing"}
          />
          <CheckBoxes
            name={"UI/UX and Graphics Design"}
            id={"UI/UX-and-Graphics-Design"}
          />
        </div>
      </div>
    </>
  );
}
export function Last() {
  const [upload, setUpload] = useState("");
  const fileUpload = useRef(null);
  const [preview, setPreview] = useState(null);
  function handleClick() {
    if (fileUpload.current) {
      fileUpload.current.click();
    }
  }

  function handleFileChange(file) {
    if (file) {
      setUpload(file.name);
      setPreview(URL.createObjectURL(file));
    }
  }
  return (
    <>
      <fieldset className="flexs jcs" style={{ gap: "2rem" }}>
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
          />
          <Label id={"yespay"} name={"Yes"} />
        </div>
        <div className="flexs" style={{ gap: "1rem" }}>
          <Inputs type={"radio"} name={"pay$200?"} id={"NoPay"} value={"No"} />
          <Label id={"NoPay"} name={"No"} />
        </div>
      </fieldset>
      <div className="flexs col ais" style={{ gap: "0.5rem" }}>
        <Label
          id={"dashboard"}
          name={"upload a screenshot of your Chaindustry account Dashboard"}
        />
        <Inputs
          type={"file"}
          name={"chaindustry-dashBoard"}
          id={"dashboard"}
          ref={fileUpload}
          onChange={(e) => {
            handleFileChange(e.target.files[0]);
          }}
        />
        <div
          className="upload"
          onDragOver={(e) => {
            e.preventDefault();
            e.stopPropagation();
            e.dataTransfer.dropEffect = "copy";
          }}
          onDrop={(e) => {
            e.preventDefault();
            e.stopPropagation();
            if (e.dataTransfer.files.length > 0) {
              handleFileChange(e.dataTransfer.files[0]);
            }
          }}
          onClick={() => {
            handleClick();
          }}
        >
          <div className="upload-icon">
            <img src={uploadIcon} alt="upload icon" />
          </div>
          <p className="drag-and-drop">Drag and drop or click to upload</p>
        </div>
        {preview && (
          <img
            src={preview}
            alt="Uploaded Preview"
            style={{
              marginTop: "1rem",
              width: "150px",
              height: "auto",
              borderRadius: "8px",
            }}
          />
        )}
      </div>
    </>
  );
}
