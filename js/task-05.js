const checkForSpam = function (message) {
  const lowerCaseString = message.toLowerCase();
  const answerSpamExist =
    lowerCaseString.includes("sale") || lowerCaseString.includes("spam");
  return answerSpamExist;
};

console.log(checkForSpam("Latest technology news"));
console.log(checkForSpam("JavaScript weekly newsletter"));
console.log(checkForSpam("Get best sale offers now!"));
console.log(checkForSpam("[SPAM] How to earn fast money?"));
