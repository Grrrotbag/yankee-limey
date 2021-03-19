const americanOnly = require("./american-only.js");
const americanToBritishSpelling = require("./american-to-british-spelling.js");
const americanToBritishTitles = require("./american-to-british-titles.js");
const britishOnly = require("./british-only.js");

function Translator() {
  this.getArray = function (originalString) {
    const originalArr = originalString.split(" ");
    return originalArr;
  };

  this.translate = function (reqObj) {
    const { text, locale } = reqObj;

    if (text === "") {
      return { error: "No text to translate" };
    }

    let originalArr = text.split(" ");
    let targetLanguage;

    if (locale === "american-to-british") {
      targetLanguage = "british";
    } else if (locale === "british-to-american") {
      targetLanguage = "american";
    } else {
      return { error: "Invalid value for locale field" };
    }

    let workingArr = [...originalArr];
    if (targetLanguage === "british") {
      workingArr.forEach((word) => {
        if (word.toLowerCase() in americanOnly) {
          let wordIdx = workingArr.indexOf(word);
          let replacementWord = americanOnly[word.toLowerCase()];
          workingArr[wordIdx] = replacementWord;
        }
        if (word.toLowerCase() in americanToBritishSpelling) {
          let wordIdx = workingArr.indexOf(word);
          let replacementWord = americanToBritishSpelling[word.toLowerCase()];
          workingArr[wordIdx] = replacementWord;
        }
        if (word.toLowerCase() in americanToBritishTitles) {
          let wordIdx = workingArr.indexOf(word);
          let replacementWord = americanToBritishTitles[word.toLowerCase()];
          replacementWord = replacementWord[0].toUpperCase() + replacementWord.slice(1);
          workingArr[wordIdx] = replacementWord;
        }
        if (word.includes(":")) {
          let wordIdx = workingArr.indexOf(word);
          let replacementWord = word.replace(":", ".");
          workingArr[wordIdx] = replacementWord;
        }
      });
    } else if (targetLanguage === "american") {
      workingArr.forEach((word) => {
        if (word.toLowerCase() in britishOnly) {
          let wordIdx = workingArr.indexOf(word);
          let replacementWord = britishOnly[word.toLowerCase()];
          workingArr[wordIdx] = replacementWord;
        }
        if (Object.values(americanToBritishSpelling).includes(word.toLowerCase())) {
          let wordIdx = workingArr.indexOf(word);
          let replacementWord = Object.keys(americanToBritishSpelling).find(
            (key) => americanToBritishSpelling[key] === word.toLowerCase()
          );
          workingArr[wordIdx] = replacementWord;
        }
        if (Object.values(americanToBritishTitles).includes(word.toLowerCase())) {
          let wordIdx = workingArr.indexOf(word);
          let replacementWord = Object.keys(americanToBritishTitles).find(
            (key) => americanToBritishTitles[key] === word.toLowerCase()
          );
          replacementWord = replacementWord[0].toUpperCase() + replacementWord.slice(1);
          workingArr[wordIdx] = replacementWord;
        }
        if (word.includes(".") && !word.endsWith(".")) {
          let wordIdx = workingArr.indexOf(word);
          let replacementWord = word.replace(".", ":");
          workingArr[wordIdx] = replacementWord;
        }
      });
    }
    return { text: text, translation: workingArr.join(" ") };
  };
}

module.exports = Translator;
