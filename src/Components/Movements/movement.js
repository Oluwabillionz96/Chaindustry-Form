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
// h1, h2, value1, value2;
export const move = [
  function (arr) {
    let movement = false;
    if (
      empty(arr[2], movement, arr[0], "Field must not be empty") &&
      empty(arr[3], movement, arr[1], "Field must not be empty")
    ) {
      if (
        arr[2].includes("@") &&
        arr[2].includes(".com") &&
        !arr[2].includes(" ")
      ) {
        movement = true;
      } else {
        movement = false;
        arr[0].current.textContent = "Email must be valid";
        arr[0].current.style.display = "block";
      }
    }

    return movement;
  },
  function (arr) {
    let movement = false;
    if (
      empty(arr[1], movement, arr[0], "Field must not be empty")
    ) {
        if (arr[1].length === 11) {
          movement = true
        } else {
            arr[0].current.textContent = 'Numbers must not be greater or lesser than 11 digits'
      }
    }
    return movement;
  },
];
