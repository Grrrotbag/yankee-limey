const chai = require("chai");
const chaiHttp = require("chai-http");
const assert = chai.assert;
const server = require("../server.js");

chai.use(chaiHttp);

suite("Functional Tests", () => {
  suite("POST /api/translate with valid text and locale fields", function () {
      test("Valid text and locale", function (done) {
        chai
          .request(server)
          .post("/api/translate")
          .send({ text: "Hello Mr. Bond", locale: "american-to-british" })
          .end(function (err, res) {
            assert.equal(res.status, 200);
            assert.equal(res.body.text, "Hello Mr. Bond");
            assert.equal(res.body.translation, `Hello <span class="highlight">Mr</span> Bond`);
            done();
          });
      });
  })

  suite("POST /api/translate with valid text and invalid locale", function () {
      test("Valid text and invalid locale", function (done) {
        chai
          .request(server)
          .post("/api/translate")
          .send({ text: "Hello Mr. Bond", locale: "american-to-french" })
          .end(function (err, res) {
            assert.equal(res.status, 200);
            assert.equal(res.body.error, "Invalid value for locale field");
            done();
          });
      });
  })

  suite("POST /api/translate with missing text and valid locale", function () {
      test("Missing text and valid locale", function (done) {
        chai
          .request(server)
          .post("/api/translate")
          .send({ locale: "american-to-british" })
          .end(function (err, res) {
            assert.equal(res.status, 200);
            assert.equal(res.body.error, "Required field(s) missing");
            done();
          });
      });
  })

  suite("POST /api/translate with valid text and missing locale", function () {
      test("Valid text and missing locale", function (done) {
        chai
          .request(server)
          .post("/api/translate")
          .send({ text: "Hello Mr. Bond" })
          .end(function (err, res) {
            assert.equal(res.status, 200);
            assert.equal(res.body.error, "Required field(s) missing");
            done();
          });
      });
  })

  suite("POST /api/translate with empty text and valid locale", function () {
      test("Empty text and valid locale", function (done) {
        chai
          .request(server)
          .post("/api/translate")
          .send({ text: "", locale: "american-to-british" })
          .end(function (err, res) {
            assert.equal(res.status, 200);
            assert.equal(res.body.error, "No text to translate");
            done();
          });
      });
  })

  suite("POST /api/translate with valid text and valid locale no translation required", function () {
      test("valid text and valid locale, no translation required", function (done) {
        chai
          .request(server)
          .post("/api/translate")
          .send({ text: "Greetings my friend.", locale: "american-to-british" })
          .end(function (err, res) {
            assert.equal(res.status, 200);
            assert.equal(res.body.text, "Greetings my friend.");
            assert.equal(res.body.translation, "Everything looks good to me!");
            done();
          });
      });
  })

});