function empty(value, toggle, reff, content) {
  if (value.length > 0) {
    toggle = true;
  } else {
    reff.current.textContent = content;
    reff.current.style.display = "block";
    toggle = false;
  }
  return toggle;
}

export const move = [
  function (h1, h2, value1, value2) {
    let movement = false;
    if (
      empty(value1, movement, h1, "Field must not be empty") &&
      empty(value2, movement, h2, "Field must not be empty")
    ) {
      if (
        value1.includes("@") &&
        value1.includes(".com") &&
        !value1.includes(" ")
      ) {
        movement = true;
      } else {
        movement = false;
        h1.current.textContent = "Email must be valid";
        h1.current.style.display = "block";
      }
    }

    return movement;
  },
  function ({ value }) {
    let movement = false;
    empty(value, movement, h1, "Field must not be empty");
    return movement;
  },
];
