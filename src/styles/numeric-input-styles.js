import { primaryColor, secondaryColor } from "./color-scheme";

const numericInputStyles = {
  input: {
    width: "6ex",
    textAlign: "center"
  },
  "input:not(.form-control)": {
    border: "none",
    borderRadius: 4,
    paddingLeft: 4,
    paddingTop: 4,
    paddingBottom: 4,
    display: "block",
    WebkitAppearance: "none",
    lineHeight: "normal"
  },
  arrowUp: {
    position: "absolute",
    top: "50%",
    left: "50%",
    width: 0,
    height: 0,
    borderWidth: "0 0.6ex 0.6ex 0.6ex",
    borderColor: `transparent transparent ${primaryColor}`,
    borderStyle: "solid",
    margin: "-0.3ex 0 0 -0.56ex"
  },

  // The decrease button arrow (i)
  arrowDown: {
    position: "absolute",
    top: "50%",
    left: "50%",
    width: 0,
    height: 0,
    borderWidth: "0.6ex 0.6ex 0 0.6ex",
    borderColor: `${primaryColor} transparent transparent`,
    borderStyle: "solid",
    margin: "-0.3ex 0 0 -0.56ex"
  },
  btn: {
    position: "absolute",
    right: 2,
    width: "2.26ex",
    borderColor: `${secondaryColor}`,
    borderStyle: "solid",
    textAlign: "center",
    cursor: "default",
    transition: "all 0.1s",
    background: `${secondaryColor}`,
    boxShadow: false
  },
  btnUp: {
    borderRadius: 3,
    borderWidth: "0"
  },
  btnDown: {
    borderRadius: 3,
    borderWidth: "0"
  }
};

export { numericInputStyles };
