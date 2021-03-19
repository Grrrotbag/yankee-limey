const chai = require("chai");
const chaiHttp = require("chai-http");
const assert = chai.assert;
const server = require("../server.js");

chai.use(chaiHttp);

let translator = require("../components/translator.js");

suite("Functional Tests", () => {});
