"use strict";

const Translator = require("../components/translator.js");

module.exports = function (app) {
  const translator = new Translator();

  app.route("/api/translate").post((req, res) => {
    console.log(req.body);
    console.log(translator.translate(req.body));

    return res.json(translator.translate(req.body));

    // let responseObj = translator.translate(req.body);
    // return res.json({ text: responseObj.text, translation: responseObj.translation });
  });
};
