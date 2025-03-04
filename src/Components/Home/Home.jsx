import logo from "../../assets/logo.svg";
import "./home.css";
import Absolute from "../Absolutes/Absolute";
import Form from "../Form/Form";

const Home = () => {
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
      <Form />
      <Absolute />
    </main>
  );
};

export default Home;
