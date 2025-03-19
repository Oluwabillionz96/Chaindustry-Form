import { Link } from "react-router-dom";
import doneIcon from "../../assets/tick-inside-circle.png";
import telegram from "../../assets/telegram.png";
import "./successful.css";

const Successful = ({ click , reload}) => {
  return (
    <section className="flexs col successful-modal abs">
      <div className="flexs col">
        <img
          src={doneIcon}
          alt="A tick inside a circle signifying being done registering"
          width={"10%"}
        />
        <h1>Successful</h1>
        <button id="modal-button" onClick={click}>
          <i className="fa fa-times" aria-hidden="true"></i>
        </button>
      </div>
      <div className="flexs col">
        <p>Congratulations, you have successfully registered</p>
        <p>Please join our telegram community to stay updated</p>
        <Link to={"https://t.me/chaindustry"} target="blank">
          <button
            type="button"
            id="sucessful-button"
            onClick={() => {
                sessionStorage.clear();
                reload()
            }}
          >
            <img src={telegram} alt="Telegram icon" />
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Successful;
