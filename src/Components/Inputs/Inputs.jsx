const Inputs = ({ type, name, id, value, placeholder }) => {
  return (
    <>
      <input
        type={type}
        name={name}
        id={id}
        required
        value={value}
        placeholder={placeholder}
      />
    </>
  );
};

export const Label = ({ id, name }) => {
  return <label htmlFor={id}>{name}</label>;
};

export default Inputs;
