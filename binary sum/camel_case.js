function toCamelCase(str) {
  return str
    .split(/-|_/)
    .map((word) =>
      word.charAt(0).isUpperCase
        ? word
        : word.charAt(0).toUpperCase().concat(word.slice(1))
    )
    .join("");
}
console.log(toCamelCase("this-is-going-to-be-awsome"));
