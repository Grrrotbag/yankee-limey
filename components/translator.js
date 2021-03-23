const americanOnly = require("./american-only.js");
const americanToBritishSpelling = require("./american-to-british-spelling.js");
const americanToBritishTitles = require("./american-to-british-titles.js");
const britishOnly = require("./british-only.js");

// Make a normalised dictionary
const translationDictionary = []
Object.keys(americanOnly).forEach(key => {
  translationDictionary.push([key, americanOnly[key]])
})
Object.keys(americanToBritishSpelling).forEach(key => {
  translationDictionary.push([key, americanToBritishSpelling[key]])
})
Object.keys(britishOnly).forEach(key => {
  translationDictionary.push([britishOnly[key], key])
})

function Translator() {

  this.translate = function (reqObj) {
    const { text, locale } = reqObj;
    
    // Catch validation errors
    if (text === undefined || locale === undefined) {
      return { error: "Required field(s) missing" };
    }

    if (text === "") {
      return { error: "No text to translate" };
    }

    // Find any phrases used that are in the translationDictionary and replace them
    let translatedString = text

    if (locale === "american-to-british") {
      translationDictionary.forEach(phrase => {
        let search = '\\b'+ phrase[0] + '\\b'
        let re = new RegExp(search, 'gi')
        translatedString = translatedString.replace(re, `<span class="highlight">${phrase[1]}</span>`)
      })
    } else if (locale === "british-to-american") {
      translationDictionary.forEach(phrase => {
        let search = '\\b'+ phrase[1] + '\\b'
        let re = new RegExp(search, 'gi')
        translatedString = translatedString.replace(re, `<span class="highlight">${phrase[0]}</span>`)
      })
    } else {
      return { error: "Invalid value for locale field" };
    }

    // find any time formats in the string and switch the separators
    const timeRegex = /([0-9]){1,2}(:|\.)([0-9]){2}/g
    let containsTime = translatedString.match(timeRegex)
    if (containsTime) {
      containsTime.forEach(time => {
        if (locale == "american-to-british") {
          translatedString = translatedString.replace(time, `<span class="highlight">${time.replace(":", ".")}</span>`)
        } else {
          translatedString = translatedString.replace(time, `<span class="highlight">${time.replace(".", ":")}</span>`)
        }
      })
    }

    // titles and honorifics
    const amRegex = /(mrs\.|mr\.|ms\.|mx\.|dr\.|prof\.)/gi
    const brRegex = /(mrs|mr|ms|mx|dr|prof)/gi
    if (locale === "american-to-british") {
      let containsTitle = translatedString.match(amRegex)
      if (containsTitle) {
        containsTitle.forEach(title => {
          translatedString = translatedString.replace(title, `<span class="highlight">${title.slice(0, -1)}</span>`)
        })
      }
    } else {
      let containsTitle = translatedString.match(brRegex)
      if (containsTitle) {
        containsTitle.forEach(title => {
          translatedString = translatedString.replace(title, `<span class="highlight">${title}.</span>`)
        })
      }
    }

    if (translatedString === text) {
      return { text: text, translation: "Everything looks good to me!"}
    }

    return { text: text, translation: translatedString }
  };
}

module.exports = Translator;
