const formatString = function (string: string) {
	return string.length > 40 ? `${string.slice(0, 40)}...` : string;
};

console.log(formatString("Curbitur ligula sapien, tincidunt non."));
console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));
console.log(formatString("Curbitur ligula sapien"));
console.log(
  formatString("Nunc sed turpis. Curabitur a felis in nunc fringilla tristique")
);
