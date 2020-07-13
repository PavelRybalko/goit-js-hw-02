const formatString = function (string) {
  if (string.length > 40) {
    let lettersEditedArray = string.split("").slice(0, 40);
    lettersEditedArray.push("...");
    const editedString = lettersEditedArray.join("");
    return editedString;
  }
  return string;
};

console.log(formatString("Curbitur ligula sapien, tincidunt non."));
console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));
console.log(formatString("Curbitur ligula sapien"));
console.log(
  formatString("Nunc sed turpis. Curabitur a felis in nunc fringilla tristique")
);
