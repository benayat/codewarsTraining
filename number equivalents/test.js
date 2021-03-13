function alphabetPosition(text) {
  str = text
    .toLowerCase()
    .replace(/[^a-z]|\s/g, "")
    .split("")
    .reduce((acumulator, val) => {
      return (acumulator || "") + (val.charCodeAt(0) - 96) + " ";
    }, "");
  return str.trim();
}
console.log(alphabetPosition("p{.pt.+/"));
