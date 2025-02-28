function block(inp) {
  inp.current.style.display = "block";
}

function textContent(inp, content) {
  inp.current.textContent = content;
}

function empty(value, toggle, reff, content) {
  if (value.length > 0) {
    toggle = true;
  } else {
    textContent(reff, content);
    block(reff);
    toggle = false;
  }
  return toggle;
}

const message = "Field must not be empty";

export const move = [
  function (arr) {
    let movement = false;
    if (
      empty(arr[2], movement, arr[0], message) &&
      empty(arr[3], movement, arr[1], message)
    ) {
      if (
        arr[2].includes("@") &&
        arr[2].includes(".com") &&
        !arr[2].includes(" ")
      ) {
        movement = true;
      } else {
        movement = false;
        textContent(arr[0], "Email must be valid");
        block(arr[0]);
      }
    }

    return movement;
  },
  function (arr) {
    let movement = false;
    if (empty(arr[1], movement, arr[0], message)) {
      if (arr[1].length === 11) {
        movement = true;
      } else {
        textContent(
          arr[0],
          "Numbers must not be greater or lesser than 11 digits"
        );
        block(arr[0]);
      }
    }
    return movement;
  },
  function (arr) {
    let movement;
    if (
      empty(arr[0], movement, arr[1], message) &&
      empty(arr[2], movement, arr[3], message)
    ) {
      if (arr[0].length === 11) {
        movement = true;
      } else {
        textContent(
          arr[1],
          "Numbers must not be greater or lesser than 11 digits"
        );
        block(arr[1]);
      }

      if (arr[2].charAt(0) === "@") {
        movement = true;
      } else {
        movement = false;
        textContent(arr[3], "This is not a valid Telegram username");
        block(arr[3]);
      }
    }
    return movement;
  },
  function (arr) {
    return true;
  },
  function (arr) {
    return true;
  },
  function (arr) {
    let movement = false;
    if (empty(arr[0], movement, arr[1], "A box must be checked")) {
      movement = true;
    }
    return movement;
  },
];
