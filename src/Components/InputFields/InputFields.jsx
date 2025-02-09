import Inputs, { Label } from "../Inputs/Inputs";

export const First = () => {
  return (
    <>
      <div className="flexs col ais " style={{ gap: "0.5rem" }}>
        <Label id={"email"} name={"Email"} />
        <Inputs
          type={"email"}
          name={"email"}
          id={"email"}
          placeholder={"example@gmail.com"}
        />
      </div>
      <div className="flexs col ais" style={{ gap: "0.5rem" }}>
        <Label id={"name"} name={"Full Name"} />
        <Inputs
          type={"name"}
          name={"name"}
          id={"name"}
          placeholder={"John Doe"}
        />
      </div>
    </>
  );
};

export function Second() {
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
          />
          <Label id={"yesPhone"} name={"Yes"} />
        </div>
        <div className="flexs" style={{ gap: "1rem" }}>
          <Inputs type={"radio"} name={"Phone?"} id={"NoPhone"} value={"No"} />
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
        />
      </div>
    </>
  );
}

export function Third() {
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
        />
      </div>
      <div className="flexs col ais" style={{ gap: "0.5rem" }}>
        <Label id={"telegram"} name={"Telegram Username"} />
        <Inputs
          type={"text"}
          name={"telegram"}
          id={"telegram"}
          placeholder={"@username"}
        />
      </div>
    </>
  );
}

export function Fourth() {
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
          />
          <Label id={"yesLaptop"} name={"Yes"} />
        </div>
        <div className="flexs" style={{ gap: "1rem" }}>
          <Inputs
            type={"radio"}
            name={"laptop?"}
            id={"NoLaptop"}
            value={"No"}
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
          />
          <Label id={"isNovice"} name={"Novice"} />
        </div>
        <div className="flexs" style={{ gap: "1rem" }}>
          <Inputs
            type={"radio"}
            name={"Computer-Literacy"}
            id={"isBasic"}
            value={"Basic Level"}
          />
          <Label id={"isBasic"} name={"Basic Level"} />
        </div>
        <div className="flexs" style={{ gap: "1rem" }}>
          <Inputs
            type={"radio"}
            name={"Computer-Literacy"}
            id={"isMid"}
            value={"Mid-level"}
          />
          <Label id={"isMid"} name={"Mid-Level"} />
        </div>
        <div className="flexs" style={{ gap: "1rem" }}>
          <Inputs
            type={"radio"}
            name={"Computer-Literacy"}
            id={"isExpert"}
            value={"Expert"}
          />
          <Label id={"isExpert"} name={"Expert"} />
        </div>
      </fieldset>
    </>
  );
}
export function Fifth() {
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
          />
          <Label id={"isNovice"} name={"Novice"} />
        </div>
        <div className="flexs" style={{ gap: "1rem" }}>
          <Inputs
            type={"radio"}
            name={"internet-exposure-level"}
            id={"isBasic"}
            value={"Basic Level"}
          />
          <Label id={"isBasic"} name={"Basic Level"} />
        </div>
        <div className="flexs" style={{ gap: "1rem" }}>
          <Inputs
            type={"radio"}
            name={"internet-exposure-level"}
            id={"isMid"}
            value={"Mid-level"}
          />
          <Label id={"isMid"} name={"Mid-Level"} />
        </div>
        <div className="flexs" style={{ gap: "1rem" }}>
          <Inputs
            type={"radio"}
            name={"internet-exposure-level"}
            id={"isExpert"}
            value={"Expert"}
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
          />
          <Label id={"onsite"} name={"Onsite"} />
        </div>
        <div className="flexs" style={{ gap: "1rem" }}>
          <Inputs
            type={"radio"}
            name={"site-prefrence"}
            id={"online"}
            value={"Online"}
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
export function Sixth() {
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
        <Inputs type={"file"} name={"chaindustry-dashBoard"} id={"dashboard"} />
      </div>
    </>
  );
}
