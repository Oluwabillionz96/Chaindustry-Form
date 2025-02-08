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
          <Inputs type={"radio"} name={"Phone?"} id={"Yes"} value={"Yes"} />
          <Label id={"yes"} name={"Yes"} />
        </div>
        <div className="flexs" style={{ gap: "1rem" }}>
          <Inputs type={"radio"} name={"Phone?"} id={"No"} value={"No"} />
          <Label id={"No"} name={"No"} />
        </div>
      </fieldset>
      <div className="flexs col ais" style={{ gap: "0.5rem" }}>
        <Label id={"number"} name={"Phone Number"} />
        <Inputs
          type={"number"}
          name={"number"}
          id={"number"}
          placeholder={"07012345678"}
        />
      </div>
    </>
  );
}
