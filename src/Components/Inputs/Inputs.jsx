const Inputs = ({ type, name, id, value, placeholder, max }) => {
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
      />
    </>
  );
};

export const Label = ({ id, name }) => {
  return <label htmlFor={id}>{name}</label>;
};

export default Inputs;
