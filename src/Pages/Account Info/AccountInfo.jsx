import Absolute from "../../Components/Absolutes/Absolute";
import logo from "../../assets/logo.svg";
import "./account.css";
import { Link } from "react-router-dom";

const AccountInfo = () => {
  return (
    <>
      <Absolute />
      <div>
        <img src={logo} alt="Chaindustry academy's logo" className="logo" />
      </div>
      <h1>What is a Chaindustry Account</h1>
      <p className="details">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,quas.
        Perferendis earum corrupti eaque. Enim laborum quia iste, ea aspernatur
        aut, voluptatum, velit reiciendis repellendus earum dolorem libero
        distinctio error molestias aliquid mollitia magnam praesentium ipsa
        asperiores. Quam, fugiat nisi ex ad illo amet odit neque perferendis
        quas dolore?
      </p>
      <div className="buttons flexs col">
        <Link to={"https://app.chaindustry.io"} className="link flexs">
          <button>Register Account</button>
        </Link>
        <Link to={"/"} className="link flexs">
          <button>Back</button>
        </Link>
      </div>
    </>
  );
};

export default AccountInfo;
