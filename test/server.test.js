const chai = require('chai');

const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const expect = chai.expect;

const app = require('../server.js');

describe('GET /', () => {
  it('should return a status code 200', done => {
    chai.request(app).get('/')
      .end((error, response) => {
         expect(response.status).to.be.equal(200);
        expect(response.ok).to.be.true;
      });
    done();
  });
});
