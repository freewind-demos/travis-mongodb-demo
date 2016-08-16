const db = require('../src/db');
const User = require('../src/user');
const saveAsAdmin = require('../src/save-as-admin');

describe('user', () => {

  beforeEach((done) => {
    db.connect();
    User.find().remove(function(err, data) {
      if(err) return done.fail(err);
      done();
    })
  });

  afterEach((done) => {
    db.close();
    done();
  });

  it('saveAsAdmin', (done) => {
    saveAsAdmin('Freewind', function(err, data) {
      if(err) return done.fail(err);
      User.find(function(err, data) {
        if(err) return done.fail(err);
        expect(data.length).toEqual(1);
        done();
      });
    })
  });
});