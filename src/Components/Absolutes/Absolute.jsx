import patternBottom from "../../assets/pattern-squiggly-line-bottom.svg";
import patternTop from "../../assets/pattern-squiggly-line-Top.svg";
import Lines from "../../assets/pattern-lines.svg";
import circle from "../../assets/pattern-circle.svg";

const Absolute = () => {
  return (
    <>
      <div className="abs squiggly-bottom">
        <img src={patternBottom} alt="squiggly pattern bottom" />
      </div>
      <div className="abs squiggly-top">
        <img src={patternTop} alt="squiggly pattern top" />
      </div>
      <div className="abs lines">
        <img src={Lines} alt="lines" />
      </div>
      <div className="abs circle-top">
        <img src={circle} alt="circular pattern" />
      </div>
      <div className="abs circle-mid">
        <img src={circle} alt="circular pattern" />
      </div>
    </>
  );
};

export default Absolute;
