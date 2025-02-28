const Inputs = ({
  type,
  name,
  id,
  value,
  placeholder,
  max,
  ref,
  onChange,
  handleKeypress,
  check,
}) => {
  return (
    <>
      <input
        type={type}
        name={name}
        id={id}
        required
        value={value}
        placeholder={placeholder}
        maxLength={max}
        ref={ref}
        onChange={onChange}
        onKeyDown={handleKeypress}
        checked={check}
        autoComplete="on"
      />
    </>
  );
};

export const Label = ({ id, name }) => {
  return <label htmlFor={id}>{name}</label>;
};

export default Inputs;
