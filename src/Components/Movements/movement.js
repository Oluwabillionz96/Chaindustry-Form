export const move = [
  function (h1, h2, value1, value2) {
    let movement = false;
    if (value1.length > 0 && value2.length > 0) {
      movement = true;
    } else {
      h1.current.style.display = "block";
      h2.current.style.display = "block";
    }

    if (
      value1.includes("@") &&
      value1.includes(".com") &&
      !value1.includes(" ")
    ) {
      movement = true;
    } else {
      movement = false;
    }

    return movement;
  },
];
