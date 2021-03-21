"use strict";

const Translator = require("../components/translator.js");

module.exports = function (app) {
  const translator = new Translator();

  app.route("/api/translate").post((req, res) => {
    let responseObj = translator.translate(req.body);
    return res.json({ text: responseObj.text, translation: responseObj.translation });
  });
};
