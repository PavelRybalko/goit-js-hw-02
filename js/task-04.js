const formatString = function (string) {
	const editedString = string.length > 40 ? string.slice(0, 40)+'...' : string;
	return editedString;
  // if (string.length > 40) {
  //   const editedString = string.slice(0, 40)+'...';
  //   return editedString;
  // }
  // return string;
};

console.log(formatString("Curbitur ligula sapien, tincidunt non."));
console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));
console.log(formatString("Curbitur ligula sapien"));
console.log(
  formatString("Nunc sed turpis. Curabitur a felis in nunc fringilla tristique")
);
