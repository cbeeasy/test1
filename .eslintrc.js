module.exports = {
  extends: ["airbnb", "standard", "standard-react"],
  parser: "babel-eslint",
  plugins: ["babel", "react", "promise"],
  env: {
    browser: true,
    jest: true
  }
};
