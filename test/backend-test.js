let expect = require("chai").expect;
let request = require("request");

//backend testing for statuscode of response and repository response
describe("Status and Repo response", function () {
  describe("Repo fetch", function () {
    //test for statuscode to be 200
    it("status", function (done) {
      //set timeout due to slow responses
      this.timeout(8000);
      request(
        "http://localhost:4000/gitlab/repo/coder",
        function (err, resp, body) {
          expect(resp.statusCode).to.equal(200);
          done();
        }
      );
    });

    //test for user repo request to respond with an object (json)
    it("Repo response", function (done) {
      //set timeout due to slow responses
      this.timeout(8000);
      request(
        "http://localhost:4000/gitlab/repo/coder",
        function (err, resp, body) {
          expect(resp).to.be.a("object");
          done();
        }
      );
    });
  });
});
